<?php
require_once 'include/config.php';
require_once 'include/db_connect.php';


 header('Content-Type: application/json');

class MainFormData {
    private $sku;
    private $name;
    private $price;

    function decoder(){
      $content = trim(file_get_contents("php://input"));
       return $decoded = json_decode($content, true);


    }


    function __construct() {
        $data =  $this-> decoder();

        $this->sku = $data['sku'];
        $this->name = $data['name'];
        $this->price = $data['price'];


    }

  /*    function start() {
        if (empty($this->firstName) || empty($this->lastName) || empty($this->emailAddress)) {
            throw new Exception("Empty Post not allowed");
        }

        else
        {
            // Do some stuiff
            echo " Registration Done";
        }
    }  */
}
$db = new Db($config['db']['server'], $config['db']['username'],  $config['db']['password'], $config['db']['dbname']);
//$addNewProduct = new MainFormData();
//$addNewProduc->test();
$db->postData();
//echo $db;
//echo '{"test":"test"}';
