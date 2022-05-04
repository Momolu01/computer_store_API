"# computer_store_API" 
Endpoints: "/api/v1/users"
  GET	"/"	Obtener la lista de los usuarios en la base de datos
  GET	"/:id"	Obtener un solo usuario dado un id
  POST	"/"	Crear un nuevo usuario, se debe proporcionar por el req.body (name, email, password, role), el role (rol) puede ser client o employee
  PATCH	"/:id"	Actualizar los datos de un usuario dado un id, solo puede actualizar su name y email
  DELETE	"/:id"	Deshabilitar la cuenta de un usuario
