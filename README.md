"# computer_store_API" <br>
Endpoints: "/api/v1/users"<br>
-  GET	"/"	Obtener la lista de los usuarios en la base de datos<br>
-  GET	"/:id"	Obtener un solo usuario dado un id<br>
-  POST	"/"	Crear un nuevo usuario, se debe proporcionar por el req.body (name, email, password, role), el role (rol) puede ser client o employee<br>
-  PATCH	"/:id"	Actualizar los datos de un usuario dado un id, solo puede actualizar su name y email<br>
-  DELETE	"/:id"	Deshabilitar la cuenta de un usuario<br>
