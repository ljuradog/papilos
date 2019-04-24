<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="">
		<title>Pricing example · Bootstrap</title>
		
		<!-- Bootstrap core CSS -->
		<link rel="stylesheet" href="../../assets/style/bootstrap.min.css">
		<link rel="stylesheet" href="../../assets/style/datatables.min.css">


		<style>
		  .bd-placeholder-img {
			font-size: 1.125rem;
			text-anchor: middle;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		  }

		  @media (min-width: 768px) {
			.bd-placeholder-img-lg {
			  font-size: 3.5rem;
			}
		  }
		</style>
		<!-- Custom styles for this template -->
		<!-- <link href="pricing.css" rel="stylesheet"> -->
	</head>

	<body>
		<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
			<h3 id="empresa" class="my-0 mr-md-auto font-weight-normal"></h3>
			<nav class="my-2 my-md-0 mr-md-3">
				<a class="p-2 text-dark" href="/perfil/cliente/">Cotizaciones</a>
				<a class="btn btn-outline-primary" href="/controller/closeSession.php">Cerrar Sesión</a>	
			</nav>
		</div>

		<div class="container">
			<p class="lead">Bienvenido <span id="usuario">Leo</span>, </p>
			
			
			<div class="row">
				<div class="col-md-7 order-md-2 mb-4">
					<h2 class="my-0 mr-md-auto mb-2 font-weight-normal">Catálogo</h2>
					<table id="tablaCatalogo" class="display" width="100%"></table>
				</div>
				<div class="col-md-4 order-md-2 mb-4 card">
					<h4 class="d-flex justify-content-between align-items-center mt-3 mb-3">
						<span class="text-muted">Nueva Cotización</span>
						<span class="badge badge-secondary badge-pill">0</span>
					</h4>

					<ul class="list-group mb-3">
						<li class="list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<h6 class="my-0 font-weight-bold"> Producto </h6>
							</div>
							<span class="font-weight-bold">Cantidad</span>
						</li>
						<div id="cotizacionResumen">
						</div>
					</ul>

					<form class="card p-2">
						<div class="input-group">
							<input id="tiempo" type="text" class="form-control" placeholder="Minutos para Ofertar">
							<div class="input-group-append">
								<button  type="submit" class="btn btn-secondary">Solicitar Cotización</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			<footer class="pt-4 pt-md-5 border-top">
				<div class="row">
					<div class="col-12 col-md">
						<small class="d-block mb-3 text-muted">© AltaGama 2019</small>
					</div>
				</div>
			</footer>
		</div>

		<script src="../../assets/script/jquery-3.3.1.min.js"></script>
		<script src="../../assets/script/datatables.min.js"></script>
		<script src="../../assets/script/underscore.js"></script>

		<script src="../../script/common.js?v=12"></script>

		<script src="../../script/nuevaSolicitud.js?v=12"></script>
	</body>
</html>