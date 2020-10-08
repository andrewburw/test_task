<?php

//require_once 'include/db_connect.php';
 header('Content-Type: application/json');
/*
class RegisterUser {
    private $firstName;
    private $lastName;
    private $emailAddress;

    function __construct() {
        $this->firstName = isset($_POST['first_name']) ? $_POST['first_name'] : null;
        $this->lastName = isset($_POST['last_name']) ? $_POST['last_name'] : null;
        $this->emailAddress = isset($_POST['email_address']) ? $_POST['email_address'] : null;
    }

    function start() {
        if (empty($this->firstName) || empty($this->lastName) || empty($this->emailAddress)) {
            throw new Exception("Empty Post not allowed");
        }

        else
        {
            // Do some stuiff
            echo " Registration Done";
        }
    }
}

$register = new RegisterUser();
if(!empty($_POST))
{
    $register->start();
} */


echo file_get_contents("php://input");
