<?php

require_once('../class/user.php');

$user = new User();
$name = $_POST['name'];
$last_name = $_POST['last_name'];
$town = $_POST['town'];
$street = $_POST['street'];
$post_code = $_POST['post_code'];
$phone_number = $_POST['phone_number'];
$email = $_POST['email'];



$password = $_POST['password'];
$password2 = $_POST['password2'];


if($password==$password2){
echo json_encode($user->create_user($name, $last_name, $town, $street, $post_code, $phone_number, $email, password_hash($password, PASSWORD_DEFAULT)));
}



