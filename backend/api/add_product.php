<?php

require_once('../class/products.php');

$product = new Product();

$name = $_POST['product_name'];
$category = $_POST['product_category'];
$description = $_POST['description'];
$price = $_POST['price'];
$quantity = $_POST['quantity'];
$discount = $_POST['discount'];

$file_name = $_FILES["image"]["name"];
$file_type = $_FILES["image"]["type"];
$file_tmp_name = $_FILES["image"]["tmp_name"];
$file_error = $_FILES["image"]["error"];
$file_size = $_FILES["image"]["size"];


echo json_encode($product->add_product($name, $category, $description, $price, $quantity, $discount, $file_name, $file_type, $file_tmp_name, $file_error, $file_size));
