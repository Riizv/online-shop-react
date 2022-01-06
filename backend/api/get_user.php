<?php

require_once('../class/account.php');

$user = new Account();
$user_id = $_GET['user_id'];

echo json_encode($user->get_account($user_id));
