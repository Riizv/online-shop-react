<?php

require_once('../class/products.php');

$cart = new Cart();

echo json_encode($cart->get_from_cart());

