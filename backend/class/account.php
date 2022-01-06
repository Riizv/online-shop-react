<?php
require_once('../database/database.php');

class Account{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }
    public function get_account($user_id){

        $query = "SELECT * FROM users WHERE user_id = $user_id";

        $result = $this->db->getConnection()->query($query); 
         
    }
    // public function modify_account($user_id){

    //     $query = "SELECT * FROM users WHERE user_id = $user_id";

    //     $result = $this->db->getConnection()->query($query); 
         
    // }
}