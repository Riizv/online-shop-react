<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

if (isset(apache_request_headers()['Authorization'])) {
    try {
        session_id(apache_request_headers()['Authorization']);

    } catch (Exception $e) {
    }
}

session_start();

// headers for CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: *");

class Database
{
    private $host = "localhost";
    private $user = "root";
    private $password = "";
    private $database = "online_shop";

    private $connection;

    public function __construct()
    {
        $this->connection = new mysqli($this->host, $this->user, $this->password, $this->database);
        $this->connection->set_charset("utf8");
        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }

    public function getConnection()
    {
       
        return $this->connection;
    }
}
