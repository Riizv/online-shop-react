<?php
require_once('../database/database.php');

class Product
{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }
    public function get_products()
    {
        $query = "SELECT * FROM products";

        $result = $this->db->getConnection()->query($query);

        $products = [];
        while ($product = $result->fetch_assoc()) {
            $products[] = $product;
        }
        return $products;
    }
    public function get_product($id)
    {
        $query = "SELECT * FROM products INNER JOIN product_images USING(product_id) INNER JOIN images USING(img_id) WHERE product_id=$id";
        
        $result = $this->db->getConnection()->query($query);

        $product = $result->fetch_assoc();
    
        return $product;
    }
    public function get_categories()
    {
        $query = "SELECT * FROM categories";

        $result = $this->db->getConnection()->query($query);

        $categories = [];
        while ($category = $result->fetch_assoc()) {
            $categories[] = $category;
        }
        return $categories;
    }

    public function add_product($name, $category, $description, $price, $quantity, $discount, $file_name, $file_type, $file_tmp_name, $file_error, $file_size)
    {

        $query = "INSERT INTO products(product_name, category, description, price, quantity, created, updated, discount) VALUES('$name', '$category', '$description', $price, $quantity, CURRENT_DATE(), CURRENT_DATE(), $discount)";

        

        $target_dir = "uploads/";

        //utworzenie katalogu uploads, jeśli nie istnieje
        if (!file_exists($target_dir)) {
            mkdir($target_dir, 0777);
            echo "Utworzono katalog $target_dir";
        }
        $errors = array();

        $ext = explode(".", $file_name);
        //end - wybiera ostatni element tablicy podanej jako argument
        $file_ext = strtolower(end($ext)); //rozszerzenie pliku
        $extensions = array("jpg", "jpeg", "png");
        //in_array() - sprawdza, czy w danej tablicy znajduje się element, którego szukamy
        if (in_array($file_ext, $extensions) == false) {
            $errors[] = "Błędne rozszerzenie, wybierz plik jpg, png lub jpeg";
        }

        if ($file_size > 5242880) { //rozmiar w bajtach
            $errors[] = "Rozmiar pliku przekracza 5MB";
        }

        $info = getimagesize($file_tmp_name); //podajemy lokalizacje tmp
        $width = $info[0];
        $height = $info[1];
        if ($width > 1000 || $height > 1000) {
            $errors[] = "Plik ma za duże wymiary, max 1000 szer lub wys";
        }

        //tworzenie katalogu z aktualną datą
        $dir_location = $target_dir ;
        echo $dir_location;
        if (!file_exists($dir_location)) {
            mkdir($dir_location, 0777);
            echo "Utworzono katalog $dir_location";
        }

        //tworzenie unikalnej nazwy pliku
        $time = time();
        $file_name = $time . "_" . $file_name;
        $target_file = $dir_location . "/" . $file_name; //lokalizacja docelowa pliku

        if(count($errors) == 0) {
            if(move_uploaded_file($file_tmp_name, $target_file)) {
                echo "Plik ".$file_name." został poprawnie wysłany na serwer";
            }  
        }

        $query2 = "INSERT INTO images(name) VALUES('$file_name')";

        $result = $this->db->getConnection()->query($query);
        $last_product_id = $this->db->getConnection()->insert_id;

        $result2 = $this->db->getConnection()->query($query2);
        $last_img_id = $this->db->getConnection()->insert_id;

        $query3 = "INSERT INTO product_images(product_id, img_id) VALUES($last_product_id, $last_img_id)";
        $result3 = $this->db->getConnection()->query($query3);

        return true;
       
    }
}
