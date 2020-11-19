<?php
 header('Content-Type: application/json');
require_once 'include/config.php';
require_once 'include/db_connect.php';


abstract class ProductBaseClass {
   public $name;
   public $price;
   public $sku;
   public $productType;


 public function __construct($name, $price,$sku,$productType){
     $this->name = $name;
     $this->price = $price;
     $this->sku = $sku;
     $this->productType = $productType;
 }

  public  function decoder(){
     $content = trim(file_get_contents("php://input")); // get form data

     return $decoded = json_decode($content, true);
  }
}
// ------------------------
class Disc extends ProductBaseClass{
    public $size;


    public function __construct(){
        $data = parent::decoder();

        parent::__construct($data['name'] , $data['price'],$data['sku'],$data['productType']);

        $this->size = $data['size'];


    }

}

class Furniture extends ProductBaseClass{
    public $height;
    public $width;
    public $length;

    public function __construct(){
        $data = parent::decoder();

        parent::__construct($data['name'] , $data['price'],$data['sku'],$data['productType']);

        $this->height = $data['height'];
        $this->width = $data['width'];
        $this->length = $data['length'];


    }

}


class Weight extends ProductBaseClass{
    public $weight;


    public function __construct(){
        $data = parent::decoder();

        parent::__construct($data['name'] , $data['price'],$data['sku'],$data['productType']);

        $this->weight = $data['weight'];


    }

}
// ******************** CONTROLLER ****************
class getFormData extends ProductBaseClass{}   // access to decoder Abstract class method
  $formData = new getFormData(null,null,null,null); // access to decoder Abstract class method
  $formSelected =  $formData->decoder();       // access to decoder Abstract class method

 $db = new Db($config['db']['server'], $config['db']['username'],  $config['db']['password'], $config['db']['dbname']);

class Controller {
   private $data;

   public function __construct( $name){
     if($name != null){
        $this->data = new  $name();
     }



   }
   public function postDataToDb(){
     //print_r($this->data);

    global  $db;
     $db->postData($this->data);

   }
   public function getValues() {

      return json_encode($this->data);
   }

}


$newProduct = new Controller($formSelected["productType"]);
$newProduct->postDataToDb();
