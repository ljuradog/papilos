<?php
session_start();

unset($_SESSION["apiToken"]);
unset($_SESSION["userName"]);
unset($_SESSION["userRoles"]);
header("location: /");  
exit;
