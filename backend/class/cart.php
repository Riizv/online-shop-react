<?php
require_once('../database/database.php');

class Cart
{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
        $query = "SELECT * FROM orders WHERE user_id = {$_SESSION['user_id']} ";
        $result = $this->db->getConnection()->query($query);
        if($result->fetch_object()){
            $query2 = "INSERT INTO orders(user_id) VALUES({$_SESSION['user_id']})";
            $result = $this->db->getConnection()->query($query2);
        }
    }
    public function add_to_cart($product_id, $quantity=1)
    {
        $order_id=$_SESSION['user_id'];
        $query = "INSERT INTO cart(product_id, quantity, order_id) VALUES($product_id, $quantity, $order_id)";

        $result = $this->db->getConnection()->query($query);
    }
    public function get_from_cart()
    {
        $query = "SELECT * FROM cart";

        $result = $this->db->getConnection()->query($query);
    }
}
