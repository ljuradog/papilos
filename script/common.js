var urlAPIGateway = 'http://192.168.56.102/server';
var appSetSession = 'controller/setSession.php';
var nombreEmpresa = 'PaPilos';

function Ajax(type, url, endpoint, params, callbackFunction, errorFunction = ajaxError) {
	$.ajax({
		url: url + endpoint,
        type: type,
		xhrFields: { withCredentials: true },
		data: params,
		success: callbackFunction,
		error: errorFunction
	});
}

// Revisar como se envía en el caso de Heroku
function AjaxBonita(type, url, endpoint, params, callbackFunction, errorFunction = ajaxError) {
	$.ajax({
		url: url + endpoint,
        type: type,
        contentType: "application/json",
        headers: {'X-Bonita-API-Token': sesionBonita.apiToken},
		xhrFields: { withCredentials: true },
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
});

