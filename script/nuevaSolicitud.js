var catalogoProductos = [];
var productosCotizacion = [];

var templateItemCotizacion = _.template('<li class="list-group-item d-flex justify-content-between lh-condensed"> <div>     <h6 id="planNombre" class="my-0"> <%= idItem %> - <%= nombreItem %></h6>     <small id="planDescripcion" class="text-muted"><%= marcaItem %></small> </div> <span class="text-muted"><%= cantidadItem %></span> </li>');

function tokenAssign() {
    AjaxToken('GET', urlAPIGateway, APIGatewayCatalogo, '', function (response) {
        var respuesta = JSON.parse(response);
        dataSet = [];

        $.each(respuesta.productos, function(key, value) {
            catalogoProductos[value.idProducto] = value;
            dataSet.push([value.idProducto, value.descripcion, value.marca, '<div style="width:100px" class="input-group"> <input id="input' + value.idProducto + '" type="text" class="form-control" placeholder="Cant"> <div class="input-group-append"> <button type="submit" class="btn btn-secondary agregarItem" data-id="'+ value.idProducto +'">+</button> </div> </div>']);
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
                idItem: value.idProducto,
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

