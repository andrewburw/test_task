<?php




class Db  {
    protected $connection;
    protected $query;

   public function __construct($dbhost = 'localhost', $dbuser = 'root', $dbpass = '', $dbname = '', $charset = 'utf8') {
     $this->connection = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
     if ($this->connection->connect_error) {
       $this->error('Failed to connect to MySQL - ' . $this->connection->connect_error);
      exit();
    }

   }

   public  $sqlErrors = array(
     1062 => 'Duplicate value!SKU field must be unique!'
   );


   public function postData($formData,$subFormData){
      // ----- TABLE VALUES ------
      // $filterNullValues = delete all null fields
      $filterNullValues = array_filter($subFormData, function($value) { return !is_null($value) && $value !== ''; });

      $imploded_form = implode("','",$formData);
      $imploded_subForm = implode("','",   $filterNullValues);

     // ----- TABLE COLUMNS ------
      $tableColums = implode(",", array_keys($formData));
      $subTableColums = implode(",", array_keys(  $filterNullValues));



     $sqlQuery = "INSERT INTO products ($tableColums , $subTableColums) VALUES ('$imploded_form',' $imploded_subForm');";


      if ($this->connection->query($sqlQuery) === TRUE) {

         echo  json_encode( array("status" => 'OK'));

      } else {

         $errorN = mysqli_errno( $this->connection);
             if (array_key_exists( $errorN , $this->sqlErrors )) {
              echo  json_encode( array("status" => 'error',"error" => $this->sqlErrors[$errorN] ));

            } else {
              echo   json_encode( array("status" => 'error',"error" => $this->connection-> error));


          }
      }

          $this->connection->close();

  }

  public function showData(){
     // -----  SHOW PRODUCTS ------


    $sqlQuery = "SELECT * FROM products;";

    $result = $this->connection->query($sqlQuery);



     if ( $result) {
       $resultArr = array();

      while ($row = $result -> fetch_assoc()) {
          $resultArr[] = $row;
      }
        return json_encode($resultArr);


     } else {

        $errorN = mysqli_errno( $this->connection);
            if (array_key_exists( $errorN , $this->sqlErrors )) {
             echo  json_encode( array("status" => 'error',"error" => $this->sqlErrors[$errorN] ));

           } else {
             echo   json_encode( array("status" => 'error',"error" => $this->connection-> error ));


         }
     }



         $this->connection->close();

 }

   public function deleteData($data){

        $ids =  implode(",",$data);

      $sqlQuery = "DELETE from `products` WHERE `id` IN ($ids);";

      if ($this->connection->query($sqlQuery) === TRUE) {

         echo  json_encode( array("status" => 'OK'));

      } else {

         $errorN = mysqli_errno( $this->connection);
             if (array_key_exists( $errorN , $this->sqlErrors )) {
              echo  json_encode( array("status" => 'error',"error" => $this->sqlErrors[$errorN] ));

            } else {
              echo   json_encode( array("status" => 'error',"error" => $this->connection-> error ));


          }
      }

          $this->connection->close();


   }

}
