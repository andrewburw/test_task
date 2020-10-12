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

   public function postData(){
     $sqlQuery = "INSERT INTO products (sku, price) VALUES ('test', 2)";

      if ($this->connection->query($sqlQuery) === TRUE) {
        echo json_encode('{"result":"New record created successfully"}');
      } else {
        echo '{"Error": " .   $sqlQuery . $this->$connection->error . "}';
      }

          $this->connection->close();

  }

}
