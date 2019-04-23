$('#login').submit(function (e) {
	e.preventDefault();
	rutaLoginStatus = 'esperarLlamada.php';
	Ajax('POST', urlAPIGateway, APIGatewayRegister, JSON.stringify({
			'username': $('#usuario').val(),
			'password': $('#password').val(),
			'correo': $('#correo').val(),
			'rol': $('#rol').val() == 1 ? 'ROLE_CLIENTE' : 'ROLE_PROVEEDOR',
		}), registerStatus,
	);
});

var registerStatus = function (result, status) {

	resultado = JSON.parse(result);
	
	if (typeof resultado.mensaje == "undefined") {
		alert("Error en la transaccion");
		return false;
	}
	
	alert(resultado.mensaje);
};

