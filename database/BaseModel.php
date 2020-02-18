<?php

namespace Database;


class BaseModel {

    /**
     *  Database connection
     *  @var Connection
     */
    private $connection;

    /**
     *  Table name
     *  @var string
     */
    protected $table;

    /**
     *  Table primary key
     *  @var int
     */
    protected $primaryKey;

    /**
     *  Table timestamps
     *  @var boolean
     */
//    public $timestamps = false;

    /**
     *  Query statement
     *  @var string
     */
    private $query;

    /**
     *  Values to put in query
     *  @var array
     */
    private $values = [];

    /**
     *  Create new Connection instance
     * @return void
     */
    public function __construct(){
        $this->connection = new Connection();
    }

    /**
     * @param mixed ...$values
     * @return void
     */
    private function addValue(...$values){
        foreach($values as $value){
            array_push($this->values, $value);
        }
    }

    /**
     *  @param string $column
     *  @param string $operator
     *  @param string $value
     *  @return $this
     */
    private function whereQuery($column,$operator,$value){
        if (empty($this->query)) {
            $this->query = "SELECT * FROM $this->table WHERE $column $operator ?";
        } else {
            $this->query .= " WHERE $column $operator ?";
        }
        $this->addValue($value);
        return $this;
    }

    /**
     *  @param array|string $columns
     *  @return $this
     */
    private function selectQuery($columns){
        if(is_array($columns)){
            $columnsString = implode(',',$columns);
        }
        else if(!is_array($columns))
            $columnsString = $columns;
        $this->query = "SELECT $columnsString FROM $this->table";
        return $this;
    }

    private function excecuteQuery(){
        $cnn = $this->connection->open();
        $query = $cnn->prepare($this->query);
        $values = $this->values;
        if($query){
            if(count($values) > 0){
                $types = $this->dataTypesToString($values);
                $query->bind_param($types,...$values);
            }
            $query->execute();
        }
        else{
            $error = $cnn->error;
            $this->connection->close();
            die($error);
        }
        $results = $query->get_result();
        $this->connection->close();
        return $results;
    }

    /**
     *  Update model on database
     *  @param int $id
     *  @param object $data
     *  @return string
     */
    public static function update($id,$data){
        $INSTANCE = new static;
        $keys = array_keys($data);
        $keysString = implode(" = ?, ", $keys) . " = ?";
        foreach($data as $key => $value){
            array_push($INSTANCE->values, $value);
        }
        array_push($INSTANCE->values,$id);
        $INSTANCE->query = "UPDATE $INSTANCE->table SET $keysString WHERE $INSTANCE->primaryKey = ?";
        $INSTANCE->excecuteQuery();
        return "success";
    }

    /**
     * @return array
     */
    public function get(){
        $results = $this->excecuteQuery();
        $result = array();
        while($res = $results->fetch_object()){
            array_push($result, $res);
        }
        return $result;
    }

    public function paginate($itemsPerPage,$currentPage) {
        $this->query .= " LIMIT $itemsPerPage OFFSET $currentPage";
        return $this;
    }

    /**
     *  Find model on database with id
     *  @param int $id
     *  @return object
     */
    public static function find($id){
        $INSTANCE = new static;
        $INSTANCE->query = "SELECT * FROM $INSTANCE->table WHERE $INSTANCE->primaryKey = ?";
        $INSTANCE->addValue($id);
        $result = $INSTANCE->excecuteQuery()->fetch_object();
        if ($result === null) {
            echo get_class($INSTANCE) . ' nuk u gjet';
            die(http_response_code(404));
        }
        return $result;
    }

    /**
     *  Delete model on database
     *  @param int $id
     *  @return string
     */
    public static function delete($id){
        $INSTANCE = new static;
        $INSTANCE->query = "DELETE FROM $INSTANCE->table WHERE $INSTANCE->primaryKey = ?";
        $INSTANCE->addValue($id);
        $INSTANCE->excecuteQuery();
        return "success";
    }

    /**
     *  Save model on database
     *  @return string
     */
    public function save(){
        $thisArray = get_object_vars($this);
        // Merri te gjitha atributet dinamike te instances perveq atributeve ndihmese
        $data = $this->filterVars($thisArray);
        $keys = array_keys($data);
        $values = array_values($data);
        $this->addValue(...$values);
        $keysString = implode(",", $keys);
        $paramSymbols = str_repeat('?,', count($keys) - 1) . '?';
        $this->query = "INSERT INTO $this->table ($keysString) VALUES ($paramSymbols); ";
        $this->excecuteQuery();
        return "success";
    }

    public function orderBy($column,$order = 'ASC'){
        if(($order == 'ASC' || $order == 'DESC') && $this->query != ""){
            $this->query .= " ORDER BY $column $order";
        }
        return $this;
    }

    /**
     *  Get all records of model on database
     *  @return array
     */
    public static function all(){
        $INSTANCE = new static;
        return $INSTANCE->selectQuery('*')->get();
    }

    public function __call($function, $arguments){
        $this->$function = call_user_func_array('App\Perdoruesi', $arguments);
        if ($function == 'where') {
            return $this->whereQuery($arguments[0],$arguments[1],$arguments[2]);
        } else if($function == 'select'){
            return $this->selectQuery($arguments[0]);
        }
    }

    public static function __callStatic($function, $arguments){
        $INSTANCE = new static;
        if ($function == 'where') {
            return $INSTANCE->whereQuery($arguments[0],$arguments[1],$arguments[2]);
        } else if ($function == 'select') {
            return $INSTANCE->selectQuery($arguments[0]);
        }
    }

    /**
     * Remove items from array
     * @param $array
     * @param array $toRemove
     * @return array
     */
    private function filterVars($array,$toRemove = []){
        if(count($toRemove) === 0)
            $toRemove = ['connection','table','primaryKey','query', 'values'];
        return array_filter(
            $array,
            function ($key) use ($toRemove) {
                foreach ($toRemove as $item) {
                    if ($item == $key) {
                        return false;
                    }
                }
                return true;
            },ARRAY_FILTER_USE_KEY
        );
    }

    /**
     * Example $data = ["string", 2,"another string" ,2.02], => $types = "sisd"
     * String = 's';
     * Integer = 'i';
     * Double = 'd';
     * @param array $data
     * @return string
     */
    private function dataTypesToString($data){
        $types = '';
        foreach ($data as $dt) {
            $varType = gettype($dt);
            if($varType == 'integer')
                $types .= 'i';
            else if($varType == 'string')
                $types .= 's';
            else if($varType == 'double')
                $types .= 'd';
            else
                $types .= 's';
        }
        return $types;
    }
}
