<?php
require_once 'include/config.php';
require_once 'include/db_connect.php';


 header('Content-Type: application/json');



$db = new Db($config['db']['server'], $config['db']['username'],  $config['db']['password'], $config['db']['dbname']);

class ProductBaseClass {
    public $id;
    public $sku;
    public $name;
    public $price;
    public $size;
    public $height;
    public $width;
    public $length;
    public $weight;

    function __construct($row){
      $this->id = $row['id'];
      $this->sku = $row['sku'];
      $this->name = $row['name'];
      $this->price = $row['price'];
      $this->size = $row['size'];
      $this->width = $row['width'];
      $this->height = $row['height'];
      $this->length = $row['length'];
      $this->weight = $row['weight'];

    }

    function returnMainData(){


      return '  <div class="form-check">
                <input class="form-check-input" type="checkbox" value=' . $this->id . ' onchange="checkChebox(this)" >
                </div>
                <br />
              <div class="text-center">
              <p class="h5">' . $this->sku . '</p>
              <p class="h5">' . $this->name . '</p>
              <p class="h5">' . $this->price . ' $</p>';
    }
}

class Disc extends ProductBaseClass{


  function generateData(){
        return ' '.$this->returnMainData() .'
                <p class="h5">Size: '.  $this->size   . ' MB</p></div>';


  }

}

class Furniture extends ProductBaseClass{


  function generateData(){
    return ' '.$this->returnMainData() .'
          <p class="h5"> Dimension: ' .  $this->height  . 'x' .  $this->width . 'x' . $this->length . '</p></div>';

  }

}


class Weight extends ProductBaseClass{


  function generateData(){
    return ' '.$this->returnMainData() .'
            <p class="h5">Weight: '.  $this->weight   . ' KG</p></div>';
  }

}


$dbData = $db->getData(); // get data form DB
$resultArr = array();
$returnData = array();

 while ($row = $dbData -> fetch_assoc()) {
     $resultArr[] = new $row['productType']($row);

 }

foreach ($resultArr as $item ){
    $returnData[] =  $item-> generateData();

}
 echo json_encode($returnData);
