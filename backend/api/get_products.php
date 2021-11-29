<?php

require_once('../class/products.php');

$product = new Product();

echo json_encode($product->get_products());

