<?php

require_once('../class/products.php');

$product = new Product();
$category=$_POST['product_category'];

echo json_encode($product->filtr_product($category));

