function tokenAssign() {
    Ajax('GET', urlAPIGateway, APIGatewayCotizacion, {'idUsuario': session.usercod}, function (response) {
        var respuesta = JSON.parse(response);
        dataSet = [];

        $.each(respuesta.productos, function(key, value) {
            var estado = value.tiempo < 0 ? 'Cerrada': 'Abierta - Tiempo Restante '+value.tiempo+' min';
            dataSet.push([value.cotizacioncod, value.items, estado, '']);
        });

        $('#tablaCotizaciones').DataTable( {
            data: dataSet,
            columns: [
                { title: "Id" },
                { title: "Items" },
                { title: "Estado" },
                { title: "" }
            ]
        } );
    });
}


