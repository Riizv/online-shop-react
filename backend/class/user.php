<?php
require_once('../database/database.php');

class User{
    private $db;


    public function __construct()
    {
        $this->db = new Database();
    }
    public function create_user($name, $last_name, $town, $street, $post_code, $phone_number, $email, $password){
        $query = "INSERT INTO users(user_name, user_password, user_town, user_street, user_post_code, user_phone_number, user_email, user_create_date, user_type) VALUES('$name $last_name',  '$password', '$town', '$street', '$post_code', '$phone_number', '$email', CURRENT_DATE(), '1' )";

        $result = $this->db->getConnection()->query($query);

        return $result;  
    }
}