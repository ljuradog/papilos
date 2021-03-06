<?php
require_once 'comun/class.dbDriver.php';

header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');

$db = new DBDriver(PDOConfig::getInstance());
$response = new stdClass;

$requestType = $_SERVER['REQUEST_METHOD'];
$request = file_get_contents('php://input');
$peticion = json_decode($request);

if ($requestType == "GET" || !is_null($peticion) ) {
    switch ($requestType) {
        case 'POST':
            $usuarios = getUsers($db, $peticion);
            if (count($usuarios) > 0) {
                $response->mensaje = "Hola ".$usuarios[0]["nombre"].", has iniciado sesion con exito!";
                $response->user->usercod = $usuarios[0]["usercod"];
                $response->user->username = $usuarios[0]["nombre"];
                $response->user->authorities = [[
                    'authority' => $usuarios[0]["rol"]
                ]];
                $response->token = "eyJhbGciOiJIUzUxMiJ9";
            }
            break;

        default:
            die('Metodo no permitido');
    }
}

//RESPUESTA
echo json_encode($response,JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);

// Obtiene los usuarios
function getUsers($db, $peticion) {
    
    return $db->query("select * from usuarios where usuario ='".$peticion->username."'");
}
