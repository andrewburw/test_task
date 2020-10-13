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

  public function getValues() {
      return  get_object_vars($this);
    }
}

class SubFormData {
    private $size;
    private $height;
    private $width;
    private $length;
    private $weight;

    
    function decoder(){
      $content = trim(file_get_contents("php://input"));
       return $decoded = json_decode($content, true);


    }


    function __construct() {
        $data =  $this-> decoder();

        $this->size = isset($data['size']) ? $data['size'] : null;
        $this->height = isset($data['height']) ? $data['height'] : null;
        $this->width =  isset($data['width']) ? $data['width']: null;
        $this->length = isset($data['length']) ? $data['length']: null;
        $this->weight = isset($data['weight']) ? $data['weight']: null;

    }

  public function getValues() {
      return  get_object_vars($this);
    }
}

$db = new Db($config['db']['server'], $config['db']['username'],  $config['db']['password'], $config['db']['dbname']);

$addNewProduct = new MainFormData();
$addNewProduct_subForm = new SubFormData();


$recivedData =  $addNewProduct->getValues();
$recivedData_subForm =  $addNewProduct_subForm->getValues();


 //$tableColumns = 'sku,name,price,size,height,width,length';
 $tableColumns = 'sku,name,price,size,height,width,length';;

$db->postData($tableColumns ,$recivedData,$recivedData_subForm );
