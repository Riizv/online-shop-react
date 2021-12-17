<?php
require_once('../database/database.php');
class SignIn
{
    private $db;


    public function __construct()
    {
        $this->db = new Database();
    }
    public function sign_in($email, $password)
    {
        $query = "SELECT user_email, user_password FROM users WHERE user_email='$email'";

        $result = $this->db->getConnection()->query($query)->fetch_object();

        if ($result) {
            return password_verify($password, $result->user_password);
        } else {
            return false;
        }
    }
}
