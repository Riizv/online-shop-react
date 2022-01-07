<?php

require_once('../class/products.php');

$cart = new Cart();

echo json_encode($cart->add_to_cart());

