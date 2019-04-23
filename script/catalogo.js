var catalogoProductos = [];

function tokenAssign() {
    Ajax('GET', urlAPIGateway, APIGatewayCatalogo, JSON.stringify({
        'idUsuario': session.usercod
    }), function (response) {
        var respuesta = JSON.parse(response);
        dataSet = [];

        $.each(respuesta.productos, function(key, value) {
            catalogoProductos[value.productocod] = value;
            dataSet.push([value.productocod, value.descripcion, value.marca, '<div class="input-group"> <input id="input' + value.idProducto + '" type="text" class="form-control" placeholder="Precio"> <div class="input-group-append"> <button type="submit" class="btn btn-secondary actualizarPrecio" data-id="'+ value.productocod +'">Actualizar</button> </div> </div>']);
        });

        $('#tablaCatalogo').DataTable( {
            data: dataSet,
            columns: [
                { title: "Id" },
                { title: "Producto / Servicio" },
                { title: "Marca" },
                { title: "Precio" }
            ]
        } );
    });
}

$(document).on('click', '.actualizarPrecio', function (e) {
    $this = $(this);

    var idProducto =  $this.attr('data-id');
    Ajax('GET', urlAPIGateway, APIGatewayCatalogo, JSON.stringify({
        'idUsuario': session.usercod
    }), function (response) {
        var respuesta = JSON.parse(response);
    })
});

