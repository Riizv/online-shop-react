<?php
require_once('../database/database.php');

class Account
{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }
    public function get_account()
    {
        $user_id = $_SESSION["user_id"];

        $query = "SELECT * FROM users WHERE user_id = $user_id";

        $result = $this->db->getConnection()->query($query);

        $user_account = $result->fetch_assoc();

        return $user_account;
    }
    public function modify_account($name, $town, $street, $post_code, $phone_number, $email, $password){

        $user_id = $_SESSION["user_id"];

        $query = "UPDATE users SET user_name='$name', user_password='$password', user_town='$town', user_street='$street', user_post_code='$post_code', user_phone_number='$phone_number', user_email ='$email' WHERE user_id = $user_id";

        $result = $this->db->getConnection()->query($query); 

        return $result;  
    }
}
