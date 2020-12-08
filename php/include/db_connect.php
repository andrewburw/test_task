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

   public  $sqlErrors = array( // error handler response
     1062 => 'Duplicate value!SKU field must be unique!'
   );


   public function postData($formData){
      // ----- POST DATA TO TABLE ------

      $tableColums = implode(",", array_keys(get_object_vars($formData)));
      $formValues  = array_values(get_object_vars($formData));
      $generateArray = array_fill(0, count($formValues), '?');
      $insertParametrsString = implode(',',$generateArray);
      $bindParamTypes = str_repeat("s",count($formValues));

      $sqlString = "INSERT INTO products ($tableColums) VAlUES ($insertParametrsString)";
      $test = $this->connection->prepare($sqlString);
      $test->bind_param($bindParamTypes, ...$formValues);
    //  if(!$test->execute()){
    //      echo mysqli_error( $this->connection);
    //  }

      if ($test->execute()) {

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

  public function getData(){
     // -----  SHOW PRODUCTS ------


    $sqlQuery = "SELECT * FROM products;";

    $result = $this->connection->query($sqlQuery);



     if ( $result) {

        return $result;

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
    // -----  DELETE PRODUCTS ------
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
