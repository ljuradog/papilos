$('#login').submit(function (e) {
	e.preventDefault();
	rutaLoginStatus = 'esperarLlamada.php';
	Ajax('POST', urlAPIGateway, APIGatewayLogin, {
			redirect: false,
			'username': $('#usuario').val(),
			'password': $('#password').val()
		}, loginStatus,
	);
});

var loginStatus = function (result, status) {

    resultado = JSON.parse(result);

    var session = {
        'userName': resultado.user.username,
        'userRoles': resultado.user.authorities,
        'token': resultado.token
    };

    Ajax('POST', '', appSetSession, JSON.stringify(session), function (response) {    	
			var perfil = resultado.user.authorities[0].authority;
			switch (perfil) {
				case 'ROLE_CLIENTE':
					window.location.href = 'perfil/cliente';
					break;
				case 'ROLE_PROVEEDOR':
					window.location.href = 'perfil/proveedor';
					break;
				case 'ROLE_ADMIN':
					window.location.href = 'perfil/cliente';
					break;
			};
    });
};

