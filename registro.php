<!DOCTYPE html>
<html lang="es" dir="ltr">
    <head>
        <meta charset="utf-8"/>
        <meta lang="es"/>
        <title>AltaGama</title>
        <link rel="stylesheet" href="./assets/style/bootstrap.min.css">
    </head>
    <body class="text-left">
        <div style="width: 100%; max-width: 330px; padding: 15px; margin: auto;">
            <form id="login" class="form-signin">
                <h1><span class=""></span>PaPilos</h1>
                <p class="mt-3 font-weight-normal">Regístrate diligenciando los siguientes datos</p>
                <label for="usuario" class="sr-only">Usuario</label>
                <input type="text" id="usuario" class="mb-3 form-control" placeholder="Usuario" required="" autofocus="">
                <label for="password" class="sr-only">Password</label>
                <input type="password" id="password" class="mb-3 form-control" placeholder="Password" required="">
                <label for="password">Correo</label>
                <input type="email" id="correo" class="mb-3 form-control" placeholder="Correo" required="">
                <label for="rol">Interesado en comprar o en vender</label>
                <select id="rol" class="mb-3 form-control" placeholder="" required="">
                    <option value="1">Comprar</option>
                    <option value="2">Vender</option>
                </select>
                <button class="mt-3 btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>
                
                <p class="mt-5 mb-3 text-muted">© AltaGama</p>
            </form>
        </div>

        <script src="./assets/script/jquery-3.3.1.min.js"></script>
        <script>
            var validar = false;
        </script>
        <script src="./script/common.js"></script>
        <script src="./script/registro.js?v=1"></script>
    </body>
</html>