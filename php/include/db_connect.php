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


   public function postData($params,$formData,$subFormData){
      //  print_r(array_values($formData));


    // echo  implode(',', $formData);
      $imploded_form = implode("','",$formData);
      $imploded_subForm = implode("','",$subFormData);
     $sqlQuery = "INSERT INTO products ($params) VALUES ('$imploded_form','$imploded_subForm');";


      if ($this->connection->query($sqlQuery) === TRUE) {

         echo   json_encode( array("status" => 'OK'));

      } else {

         $errorN = mysqli_errno( $this->connection);
             if (array_key_exists( $errorN , $this->sqlErrors )) {
              echo  json_encode( array("status" => 'error',"error" => $this->sqlErrors[$errorN] ));
            } else {
              echo   json_encode( array("status" => 'error',"error" => $this->connection-> error,'sql'=> $sqlQuery ));

          }
      }

          $this->connection->close();

  }

}
