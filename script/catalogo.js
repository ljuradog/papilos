var catalogoProductos = [];

function tokenAssign() {
    AjaxToken('POST', urlAPIGateway, APIGatewayCatalogo, {
        'idUsuario': session.nombre
    }, function (response) {
        var respuesta = JSON.parse(response);
        dataSet = [];

        $.each(respuesta.productos, function(key, value) {
            catalogoProductos[value.idProducto] = value;
            dataSet.push([value.idProducto, value.descripcion, value.marca, '<div class="input-group"> <input id="input' + value.idProducto + '" type="text" class="form-control" placeholder="Precio"> <div class="input-group-append"> <button type="submit" class="btn btn-secondary actualizarPrecio" data-id="'+ value.idProducto +'">Actualizar</button> </div> </div>']);
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

});

