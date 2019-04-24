var catalogoProductos = [];

function tokenAssign() {
    Ajax('GET', urlAPIGateway, APIGatewayCatalogo, {
        'idUsuario': session.usercod
    }, function (response) {
        var respuesta = JSON.parse(response);
        dataSet = [];
	
        $.each(respuesta.productos, function(key, value) {
            catalogoProductos[value.productocod] = value;
	    precio = (value.preciounitario == null) ? '' : value.preciounitario;
            dataSet.push([value.productocod, value.descripcion, value.marca, precio == '' ? '--': '$ '+ precio, '<div class="input-group" style="width: 200px;"> <input id="input' + value.productocod + '" value="'+precio+'" type="text" class="form-control text-right" placeholder="Precio"> <div class="input-group-append"> <button type="submit" class="btn btn-secondary actualizarPrecio" data-id="'+ value.productocod +'">Actualizar</button> </div> </div>']);
        });

        $('#tablaCatalogo').DataTable( {
            data: dataSet,
            columns: [
                { title: "Id" },
                { title: "Producto / Servicio" },
                { title: "Marca" },
		{ title: "Precio Registrado"},
                { title: "" }
            ],
	    columnDefs: [
                { 
                  targets: 3,
                  className: 'dt-body-right'
               }
            ]
        } );
    });
}

$(document).on('click', '.actualizarPrecio', function (e) {
    $this = $(this);

    var idProducto =  $this.attr('data-id');
    Ajax('POST', urlAPIGateway, APIGatewayCatalogo, JSON.stringify({
        'idUsuario': session.usercod,
        'idProducto': idProducto,
        'precio': $("#input" + idProducto).val(),
    }), function (response) {
        var respuesta = JSON.parse(response);
    })
});

