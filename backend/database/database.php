<?php

class Database
{
    private $host = "localhost";
    private $user = "kacper";
    private $password = "TKmxbQv6e3Q4Zc";
    private $database = "online_shop";

    private $connection;

    public function __construct()
    {
        $this->connection = new mysqli($this->host, $this->user, $this->password, $this->database);
        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }

    public function getConnection()
    {
        return $this->connection;
    }
}
echo "cos";