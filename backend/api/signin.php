<?php
require_once('../database/database.php');

require_once('../class/login.php');

$data= new SignIn();
$email = $_POST['signin_email'];
$password = $_POST['signin_password'];


echo json_encode($data->sign_in($email, $password));

