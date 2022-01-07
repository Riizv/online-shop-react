<?php
require_once('../database/database.php');

class Cart{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }
    public function add_to_cart($user_id){

        $_SESSION[`cart`];


        $query = "";

        $result = $this->db->getConnection()->query($query); 
         
    }
    public function get_from_cart(){
        $query = "";

        $result = $this->db->getConnection()->query($query);
         
    }
}