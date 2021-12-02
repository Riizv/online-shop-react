<?php
require_once('../database/database.php');

class Product{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }
    public function get_products(){
        $query = "SELECT * FROM products";

        $result = $this->db->getConnection()->query($query);

        $products = [];
        while ($product = $result->fetch_assoc()) {
            $products[] = $product;
        }
        return $products;
         
    }
    public function get_product($id){
        $query = "SELECT * FROM products WHERE id=$id";

        $result = $this->db->getConnection()->query($query);

        $product = $result->fetch_assoc();
       
        return $product;
         
    }
}