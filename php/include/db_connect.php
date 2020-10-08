<?php

  include 'config.php';

  $connect = mysqli_connect(
      $config['db']['server'],
      $config['db']['username'],
      $config['db']['password'],
      $config['db']['dbname']
    );

    if ($connect == false) {
      echo 'Error in connection to db.<br>';
      echo mysqli_connect_error();
      exit();

    } else {
      echo 'ok';
    }
