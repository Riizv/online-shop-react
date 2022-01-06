<?php

require_once('../class/account.php');

$user = new Account();

echo json_encode($user->get_account());
