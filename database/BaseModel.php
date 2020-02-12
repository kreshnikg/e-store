<?php

namespace Database;


class BaseModel {
    private $connection;
    protected $tableName;
    public $primaryKey;
//    public $timestamps = false;
    private $query;

    private $values = [];

    public function __construct(){
        $this->connection = new Connection();
    }

    private function addValue(...$values){
        foreach($values as $value){
            array_push($this->values, $value);
        }
    }

    private function whereQuery($column,$operator,$value){
        if (empty($this->query)) {
            $this->query = "SELECT * FROM $this->tableName WHERE $column $operator ?";
        } else {
            $this->query .= " WHERE $column $operator ?";
        }
        $this->addValue($value);
        return $this;
    }

    private function selectQuery($arguments){
        $columns = '*';
        if ($arguments != null) {
            if(is_array($arguments[0]))
                $columns = implode(',',$arguments[0]);
            else if(!is_array($arguments[0]))
                $columns = $arguments[0];
        }
        $this->query = "SELECT $columns FROM $this->tableName";
        return $this;
    }

    private function excecuteQuery(){
        $cnn = $this->connection->open();
        $query = $cnn->prepare($this->query);
        $values = $this->values;

        if(count($values) > 0){
            $types = $this->dataTypesToString($values);
            $query->bind_param($types,...$values);
        }

        if($query)
            $query->execute();
        else{
            $error = $cnn->error;
            $this->connection->close();
            die($error);
        }
        $results = $query->get_result();
        $this->connection->close();
        return $results;
    }

    private function insert(){

    }

    private function update(){

    }

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

    public static function find($id){
        $INSTANCE = new static;
        $INSTANCE->query = "SELECT * FROM $INSTANCE->tableName WHERE $INSTANCE->primaryKey = ?";
        $INSTANCE->addValue($id);
        $result = $INSTANCE->excecuteQuery()->fetch_object();
        if ($result != null) {

        }
        return $result;
    }

    public static function delete($id){
        $INSTANCE = new static;
        $INSTANCE->query = "DELETE FROM $INSTANCE->tableName WHERE $INSTANCE->primaryKey = ?";
        $INSTANCE->addValue($id);
        $INSTANCE->excecuteQuery();
        return "success";
    }

    public function save(){
        $thisArray = get_object_vars($this);
        // Merri te gjitha atributet dinamike te instances perveq atributeve ndihmese
        $data = $this->filterVars($thisArray,['connection','tableName','primaryKey','query','values']);
        $keys = array_keys($data);
        $values = array_values($data);
        $this->addValue(...$values);
        $keysString = implode(",", $keys);
        $paramSymbols = str_repeat('?,', count($keys) - 1) . '?';
        $this->query = "INSERT INTO $this->tableName ($keysString) VALUES ($paramSymbols); ";
        $this->excecuteQuery();
        return "success";
    }

    public function orderBy($column,$order = 'ASC'){
        if(($order == 'ASC' || $order == 'DESC') && $this->query != ""){
            $this->query .= " ORDER BY $column $order";
        }
        return $this;
    }

    public static function all(){
        $INSTANCE = new static;
        $INSTANCE->query = "SELECT * FROM $INSTANCE->tableName";
        return $INSTANCE->get();
    }

    public function __call($name, $arguments){
        if ($name == 'where') {
            return $this->whereQuery($arguments[0],$arguments[1],$arguments[2]);
        } else if($name == 'select'){
            return $this->selectQuery($arguments);
        }
    }

    public static function __callStatic($name, $arguments){
        $INSTANCE = new static;
        if ($name == 'where') {
            return $INSTANCE->whereQuery($arguments[0],$arguments[1],$arguments[2]);
        } else if ($name == 'select') {
            return $INSTANCE->selectQuery($arguments);
        }
    }

    // Remove items from array
    private function filterVars($array,$toRemove = []){
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

    /*
     * Example $data = ["string", 2,"another string" ,2.02], => $types = "sisd"
     * String = 's';
     * Integer = 'i';
     * Double = 'd';
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
