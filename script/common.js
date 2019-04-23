var urlAPIGateway = 'https://backpapilos.herokuapp.com';

// ====== API's
var APIGatewayLogin = '/login.php';
var APIGatewayCatalogo = '/catalogo.php';

var appSetSession = 'controller/setSession.php';
var appGetSession = '../../controller/getSession.php';

var session = {
	nombre: '',
	token: ''
};

var nombreEmpresa = 'PaPilos';

function Ajax(type, url, endpoint, params, callbackFunction, errorFunction = ajaxError) {
	$.ajax({
		url: url + endpoint,
        type: type,
		xhrFields: { withCredentials: true },
		crossDomain: true,
		data: params,
		success: callbackFunction,
		error: errorFunction
	});
}

// Revisar como se envía en el caso de Heroku
function AjaxToken(type, url, endpoint, params, callbackFunction, errorFunction = ajaxError) {
	$.ajax({
		url: url + endpoint,
        type: type,
        contentType: "application/json",
        headers: {'Authorization': 'Bearer ' + session.token},
		xhrFields: { withCredentials: true },
		crossDomain: true,
		data: JSON.stringify(params),
		success: callbackFunction,
		error: errorFunction
	});
}

function ajaxError (err) {
    console.log(err);
}

// Cuando cargue la pagina
$(document).ready(function () {
	$('#empresa').html(nombreEmpresa);
	if (typeof validar === "undefined" || validar !== false) {
		Ajax('GET', '', appGetSession, {}, loginSuccess, loginError);
	}
});

function loginSuccess (result, status) {
	var respuesta = JSON.parse(result);
	session.nombre = respuesta.userName
	session.token = respuesta.token;

	if (typeof tokenAssign == "function") {
		tokenAssign();
	}
}

function loginError () {
    alert('No hay sesion iniciada');
    window.location.href = 'http://192.168.56.102';
}




