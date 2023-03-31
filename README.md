# Spotify_API
Este es un proyecto de una API para conectarse con la plataforma de música Spotify. La API está construida con Node.js, Express.js y Mongoose.

# Requisitos previos
Tener instalado Node.js en su máquina
Tener una cuenta en la plataforma de música Spotify
Tener una cuenta en MongoDB y una base de datos configurada

# Instalación
Clonar el repositorio en tu máquina
Instalar las dependencias del proyecto usando el comando npm install
Configurar las variables de entorno en el archivo .env. Se necesita definir las siguientes variables:
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/api-spotify
  SPOTIFY_CLIENT_ID=<su client ID de Spotify>
  SPOTIFY_CLIENT_SECRET=<su client secret de Spotify>
  SPOTIFY_REDIRECT_URI=http://localhost:3000/auth/callback
Iniciar la aplicación usando el comando 'npm start'

Para utilizar el proyecto, asegúrate de tener instaladas las siguientes librerías:

- bcrypt
- connect-flash
- connect-mongodb-session
- cookie-parser
- dotenv
- ejs
- express
- express-session
- jsonwebtoken
- mongoose
Puedes instalar estas librerías fácilmente utilizando el gestor de paquetes de Node.js, npm. Sigue los ]siguientes pasos:

bre una terminal o línea de comandos en tu sistema operativo.
Navega a la carpeta donde está ubicado el proyecto.
Ejecuta el siguiente comando:

```shell
npm install
```
Este comando instalará todas las dependencias listadas en el archivo package.json, incluyendo las librerías mencionadas anteriormente.

Si deseas instalar una librería en particular, puedes ejecutar el siguiente comando:

```shell
npm install <nombre-de-la-librería>
Reemplaza <nombre-de-la-librería> con el nombre de la librería que deseas instalar.
```

Una vez que hayas instalado las librerías, ya estás listo para utilizar el proyecto. ¡Disfrútalo!


# Estructura de carpetas

* `node_modules/: Carpeta que contiene las dependencias del proyecto.
* `src/: Carpeta que contiene todo el código fuente del proyecto.
*   `controllers/: Carpeta que contiene los controladores de las rutas.
*     `authController.js: Archivo que contiene la lógica para la autenticación de usuarios.
*   `models/: Carpeta que contiene los modelos de datos de la base de datos.
*     `user.js: Archivo que contiene el modelo de datos de usuarios.
*   `routes/: Carpeta que contiene las rutas de la aplicación.
*     `auth.js: Archivo que contiene las rutas para la autenticación de usuarios.
*     `index.js: Archivo que contiene las rutas para la página principal.
*   `views/: Carpeta que contiene las plantillas de vistas de la aplicación.
*       `home.ejs: Archivo que contiene la plantilla de la página de inicio.
*       `index.ejs: Archivo que contiene la plantilla del encabezado y pie de página.
*       `login.ejs: Archivo que contiene la plantilla de la página de inicio de sesión.
*       `register.ejs: Archivo que contiene la plantilla de la página de registro de usuarios.
*   `index.js: Archivo que contiene el código principal de la aplicación.
* `.env: Archivo que contiene variables de entorno para la configuración de la aplicación.
* `.gitignore: Archivo que indica a Git qué archivos y carpetas ignorar al hacer un commit.
* `config.js: Archivo que contiene la configuración de la base de datos y el puerto de la aplicación.
* `package-lock.json: Archivo generado automáticamente por npm para asegurar la consistencia de las dependencias instaladas.
* `package.json: Archivo que contiene información sobre el proyecto y las dependencias utilizadas.
# Uso
La API proporciona los siguientes endpoints:

* GET /: Muestra la página de inicio de la aplicación
* GET /auth/login: Redirige a la página de inicio de sesión de Spotify
* GET /auth/callback: Callback que se llama después de que el usuario inicie sesión en Spotify. Obtiene el token  de acceso de Spotify y lo almacena en una cookie
* GET /search: Busca en la plataforma de música Spotify y devuelve los resultados
* GET /playlist/:id: Obtiene una lista de reproducción de Spotify según su ID
* POST /playlist: Crea una lista de reproducción de Spotify
* Para utilizar la API, es necesario realizar una autenticación en Spotify a través del endpoint /auth/login.   Una vez autenticado, se puede realizar una búsqueda en la plataforma de música Spotify a través del endpoint /search. También se pueden crear y obtener listas de reproducción a través de los endpoints /playlist/:id y /playlist.

# Contribución
Si desea contribuir a este proyecto, puede enviar una solicitud de extracción o abrir un problema.

# Autores
- Gómez Flores Luis Enrique
- Martinez Mendiola Jose Fernando
- Vasquez Rodriguez Gabriel Jairo
- Cauich de la Cruz Gael Alberto
- Estrada Rosas Luis Fernando
- Pech Garcia Nahun Issac 
# Licencia
Este proyecto está bajo la Licencia MIT
