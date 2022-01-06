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
        $query = "SELECT user_id, user_email, user_password, user_type FROM users WHERE user_email='$email'";

        $result = $this->db->getConnection()->query($query)->fetch_object();

        if ($result) {
            if (password_verify($password, $result->user_password)) {
                $_SESSION["user_id"] = $result->user_id;
                $_SESSION["user_type"] = $result->user_type;
                return session_id();
            }
        } else {
            return false;
        }
    }
}
