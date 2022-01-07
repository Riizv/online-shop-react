<?php

require_once('../class/products.php');

$category = new Product();

echo json_encode($category->get_categories());