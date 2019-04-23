<?php
session_start();
$post = file_get_contents('php://input');

$request = json_decode($post);
$response = new stdClass();

error_log(print_r($request, true));

if (is_object($request)) {
    $_SESSION["apiToken"] = $request->token;
    $_SESSION["userName"] = $request->userName;
    $_SESSION["userRoles"] = $request->userRoles;
    $_SESSION["userCod"] = $request->userCod;
    
    $response->msg = 'Se han seteado correctamente las variables de sesion';
    echo json_encode($response);
} else {
    header("HTTP/1.1 400 Bad Request");
}