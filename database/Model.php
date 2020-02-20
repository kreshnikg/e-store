<?php

namespace Database;

class Model
{
    use Relations;
    use Timestamps;
    use Query;

    /**
     * Database connection
     * @var Connection
     */
    private $connection;

    /**
     * Table name
     * @var string
     */
    protected $table;

    /**
     * Table primary key
     * @var int
     */
    protected $primaryKey;

    /**
     * Table timestamps
     * @var boolean
     */
    public $timestamps = false;

    /**
     * The relations to load on every query
     * @var array
     */
    private $with = [];

    /**
     * Create new Connection instance
     * @return void
     */
    public function __construct()
    {
        $this->connection = new Connection();
    }

    /**
     * Get timestamps value
     * @return boolean
     */
    private function timestamps()
    {
        return $this->timestamps;
    }

    /**
     * Get model with relationships for every query
     * @param array $relations
     * @return self
     */
    public static function with($relations)
    {
        $INSTANCE = new static;

        $INSTANCE->bootRelations($relations);

        return $INSTANCE;
    }

    /**
     * Update model on database
     * @param int $id
     * @param object $data
     * @return string
     */
    public static function update($id, $data)
    {
        $INSTANCE = new static;

        $keysString = $INSTANCE->getKeysForUpdateQuery(array_keys($data));

        foreach ($data as $key => $value) {
            $INSTANCE->addValue($value);
        }
        $INSTANCE->updateQuery($keysString)->where($INSTANCE->primaryKey, '=', $id);
        $INSTANCE->excecuteQuery();
        return "success";
    }

    /**
     * Excecute query and convert results to array
     * @return array
     */
    public function get()
    {
        $results = $this->excecuteQuery();
        $result = array();
        while ($res = $results->fetch_object()) {
            array_push($result, $res);
        }

        if($this->hasRelations()){
            $this->addRelationDataToResult($result);
        }

        return $result;
    }

    public function paginate($itemsPerPage){}

    /**
     *  Find model on database with id
     * @param int $id
     * @return object
     */
    public static function find($id)
    {
        $INSTANCE = new static;
        $INSTANCE->whereQuery($INSTANCE->primaryKey, '=', $id);
        $result = $INSTANCE->excecuteQuery()->fetch_object();
        if ($result === null) {
            response(get_class($INSTANCE) . ' nuk u gjet', 404);
        }
        return $result;
    }

    /**
     *  Delete model on database
     * @param int $id
     * @return string
     */
    public static function delete($id)
    {
        $INSTANCE = new static;
        $INSTANCE->deleteQuery()->where($INSTANCE->primaryKey, '=', $id)->excecuteQuery();
        return "success";
    }

    /**
     *  Save model on database
     * @return string
     */
    public function save()
    {
        $thisArray = get_object_vars($this);
        $data = filterVars($thisArray);
        $keys = array_keys($data);
        $values = array_values($data);
        if ($this->timestamps()) {
            array_push($keys, $this->CREATED_AT, $this->UPDATED_AT);
            $date = date("d-m-Y");
            array_push($values, $date, $date);
        }
        $this->addValue(...$values);
        $keysString = implode(",", $keys);
        $paramSymbols = str_repeat('?,', count($keys) - 1) . '?';
        $this->query = "INSERT INTO $this->table ($keysString) VALUES ($paramSymbols); ";
        $this->excecuteQuery();
        return "success";
    }

    /**
     * Add an order query
     * @param $column
     * @param string $order = "ASC|DESC"
     * @return $this
     */
    public function orderBy($column, $order = 'ASC')
    {
        if (($order == 'ASC' || $order == 'DESC') && $this->query != "") {
            $this->query .= " ORDER BY $column $order";
        }
        return $this;
    }

    /**
     *  Get all records of model on database
     * @return array
     */
    public static function all()
    {
        return self::select('*')->get();
    }

    public function __call($function, $arguments)
    {
        if ($function == 'where') {
            return $this->whereQuery($arguments[0], $arguments[1], $arguments[2]);
        } else if ($function == 'select') {
            return $this->selectQuery($arguments[0]);
        }
    }

    public static function __callStatic($function, $arguments)
    {
        $INSTANCE = new static;
        if ($function == 'where') {
            return $INSTANCE->whereQuery($arguments[0], $arguments[1], $arguments[2]);
        } else if ($function == 'select') {
            return $INSTANCE->selectQuery($arguments[0]);
        }
    }
}