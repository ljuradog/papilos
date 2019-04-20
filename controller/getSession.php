<?php
session_start();
$response = new stdClass();

if (key_exists('apiToken', $_SESSION)) {
    $response->userName = $_SESSION["userName"];
    $response->authorities = $_SESSION["userRoles"];
    echo json_encode($response);
} else {
    header("HTTP/1.1 400 Bad Request");    
}