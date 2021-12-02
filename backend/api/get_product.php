<?php

require_once('../class/products.php');

$product = new Product();
$id = $_GET['id'];

echo json_encode($product->get_product($id));

