<?php
require_once 'include/config.php';
require_once 'include/db_connect.php';


 header('Content-Type: application/json');



$db = new Db($config['db']['server'], $config['db']['username'],  $config['db']['password'], $config['db']['dbname']);
  $showArrayresult = $db->showData();

  echo $showArrayresult;
