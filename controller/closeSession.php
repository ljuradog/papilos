<?php
session_start();

unset($_SESSION["apiToken"]);
unset($_SESSION["userName"]);
unset($_SESSION["userRoles"]);
unset($_SESSION["userCod"]);
header("location: /");  
exit;
