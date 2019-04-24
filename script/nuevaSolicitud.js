var catalogoProductos = [];
var productosCotizacion = [];

var templateItemCotizacion = _.template('<li class="list-group-item d-flex justify-content-between lh-condensed"> <div>     <h6 id="planNombre" class="my-0"> <%= idItem %> - <%= nombreItem %></h6>     <small id="planDescripcion" class="text-muted"><%= marcaItem %></small> </div> <span class="font-weight-bold"><%= cantidadItem %></span> </li>');

function tokenAssign() {
    AjaxToken('GET', urlAPIGateway, APIGatewayCatalogo, '', function (response) {
        var respuesta = JSON.parse(response);
        dataSet = [];

        $.each(respuesta.productos, function(key, value) {
            catalogoProductos[value.productocod] = value;
            dataSet.push([value.productocod, value.descripcion, value.marca, '<div style="width:100px" class="input-group"> <input id="input' + value.productocod + '" type="text" class="form-control" placeholder="Cant"> <div class="input-group-append"> <button type="submit" class="btn btn-secondary agregarItem" data-id="'+ value.productocod +'">+</button> </div> </div>']);
        });

        $('#tablaCatalogo').DataTable( {
            data: dataSet,
            columns: [
                { title: "Id" },
                { title: "Producto / Servicio" },
                { title: "Marca" },
                { title: "" }
            ]
        } );

        actualizarSolicitudCotizacion();
    });
}

$(document).on('click', '.agregarItem', function (e) {
    $this = $(this);

    var idProducto =  $this.attr('data-id');
    
    productosCotizacion[idProducto] = catalogoProductos[idProducto];
    productosCotizacion[idProducto].cantidad = $('#input'+idProducto).val();

    actualizarSolicitudCotizacion();
});

// Actualiza el cuadro de la cotización
function actualizarSolicitudCotizacion () {
    var htmlResumenCotizacion = "";
    var elementos = 0;
    $.each(productosCotizacion, function (key, value) {
        if (typeof value !== "undefined" && value.cantidad > 0) {
            htmlResumenCotizacion += templateItemCotizacion({
                idItem: value.productocod,
                nombreItem: value.descripcion,
                marcaItem: value.marca,
                cantidadItem: value.cantidad
            });
            elementos++;
        }
    });

    $('#cotizacionResumen').html(htmlResumenCotizacion);
    $('.badge').html(elementos);
}

$(document).on('submit', 'form', function (e) {
    e.preventDefault();
    console.log("bien");
    var productosPeticion = [];

    $.each(productosCotizacion, function (key, value) {
	if (typeof value !== "undefined" && value.cantidad > 0) {
            productosPeticion.push({'productocod': value.productocod, 'cantidad': value.cantidad});
        }
    });

    Ajax('POST', urlAPIGateway, APIGatewayCotizacion, JSON.stringify({
         'idUsuario': session.usercod,
         'tiempo': $('#tiempo').val(),
         'productos': productosPeticion,
     }), function (response) {
         var respuesta = JSON.parse(response);
         window.location.href = '/perfil/cliente';
     });
});
