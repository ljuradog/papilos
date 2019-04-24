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
			
			<h2 class="my-0 mr-md-auto font-weight-normal">Cotizaciones</h2>
			<a class="btn btn-outline-primary float-sm-right mb-3" href="solicitud.php">Solicitar Nueva Cotización</a>
			<table id="tablaCotizaciones" class="display table" width="100%"></table>
			

			

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
		<script src="../../script/common.js?v=12"></script>
		<script src="../../script/cotizacionesCliente.js?v=12"></script>
	</body>
</html>