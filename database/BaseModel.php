<?php

namespace Database;

class BaseModel {
    private $connection;
    protected $tableName;
    public $primaryKey;
//    public $timestamps = false;
    private $query;

    public function __construct(){
        $this->connection = new Connection();
    }

    public function get(){
        $cnn = $this->connection->getConnection();
        $query = $cnn->prepare($this->query);
        if($query)
            $query->execute();
        else{
            $error = $cnn->error;
            $this->connection->closeConnection();
            die($error);
        }
        $results = $query->get_result();
        $this->connection->closeConnection();
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
        $instance = new static;
        $cnn = $instance->connection->getConnection();
        $query = $cnn->prepare("SELECT * FROM $instance->tableName WHERE $instance->primaryKey = ?");
        $query->bind_param('i', $id);
        $query->execute();
        $result = $query->get_result()->fetch_object();
        $instance->connection->closeConnection();
        return $result;
    }

    public static function delete($id){
        $instance = new static;
        $cnn = $instance->connection->getConnection();
        $query = $cnn->prepare("DELETE FROM $instance->tableName WHERE $instance->primaryKey = ?");
        $query->bind_param('i', $id);
        $query->execute();
        $instance->connection->closeConnection();
        return "success";
    }

    public function save(){
        $cnn = $this->connection->getConnection();
        $thisArray = get_object_vars($this);
        // Merri te gjitha atributet dinamike te instances perveq atributeve ndihmese
        $data = $this->filterVars($thisArray,['connection','tableName','primaryKey','query']);

        $keys = array_keys($data);
        $values = array_values($data);

        $keysString = implode(",", $keys);

        $types = $this->dataTypesToString($data);

        $paramSymbols = str_repeat('?,', count($keys) - 1) . '?';

        $query = $cnn->prepare("INSERT INTO $this->tableName ($keysString) VALUES ($paramSymbols); ");
        if( !$query ){
            $error = $cnn->error;
            $this->connection->closeConnection();
            die($error);
        }
        $query->bind_param($types, ...$values);
        $query->execute();
        $this->connection->closeConnection();
        return true;
    }

    private function whereQuery($column,$operator,$value){
        if (empty($this->query)) {
            $this->query = "SELECT * FROM $this->tableName WHERE $column $operator '$value'";
        } else {
            $this->query .= " WHERE $column $operator '$value'";
        }
        return $this;
    }

    private function selectQuery($arguments){
        if ($arguments != null) {
            if(is_array($arguments[0]))
                $columns = implode(',',$arguments[0]);
            else if(!is_array($arguments[0]))
                $columns = $arguments[0];
        } else
            $columns = '*';
        $this->query = "SELECT $columns FROM $this->tableName";
        return $this;
    }

    public function orderBy($column,$order = 'ASC'){
        if(($order == 'ASC' || $order == 'DESC') && $this->query != ""){
            $this->query .= " ORDER BY $column $order";
        }
        return $this;
    }

    public static function all(){
        $instance = new static;
        $instance->query = "SELECT * FROM $instance->tableName";
        return $instance->get();
    }

    public function __call($name, $arguments){
        if ($name == 'where') {
            return $this->whereQuery($arguments[0],$arguments[1],$arguments[2]);
        } else if($name == 'select'){
            return $this->selectQuery($arguments);
        }
    }

    public static function __callStatic($name, $arguments){
        $instance = new static;
        if ($name == 'where') {
            return $instance->whereQuery($arguments[0],$arguments[1],$arguments[2]);
        } else if ($name == 'select') {
            return $instance->selectQuery($arguments);
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
     * String = "s";
     * Integer = "i";
     * Double = "d";
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
