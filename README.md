# API de Spotify
Este es un proyecto de una API para conectarse con la plataforma de música Spotify. La API está construida con Node.js, Express.js y Mongoose.

# Requisitos previos
* Tener instalado Node.js en su máquina
* Tener una cuenta en la plataforma de música Spotify
* Tener una cuenta en MongoDB y una base de datos configurada

# Instalación
* Clonar el repositorio en tu máquina
* Instalar las dependencias del proyecto usando el comando npm install
* Configurar las variables de entorno en el archivo .env. Se necesita definir las siguientes variables:
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/api-spotify
  SPOTIFY_CLIENT_ID=<su client ID de Spotify>
  SPOTIFY_CLIENT_SECRET=<su client secret de Spotify>
  SPOTIFY_REDIRECT_URI=http://localhost:3000/auth/callback
* Iniciar la aplicación usando el comando 'npm start'

# Uso
* La API proporciona los siguientes endpoints:

* GET /: Muestra la página de inicio de la aplicación
* GET /auth/login: Redirige a la página de inicio de sesión de Spotify
* GET /auth/callback: Callback que se llama después de que el usuario inicie sesión en Spotify. Obtiene el token  de acceso de Spotify y lo almacena en una cookie
* GET /search: Busca en la plataforma de música Spotify y devuelve los resultados
* GET /playlist/:id: Obtiene una lista de reproducción de Spotify según su ID
* POST /playlist: Crea una lista de reproducción de Spotify
* Para utilizar la API, es necesario realizar una autenticación en Spotify a través del endpoint /auth/login.   Una vez autenticado, se puede realizar una búsqueda en la plataforma de música Spotify a través del endpoint /search. También se pueden crear y obtener listas de reproducción a través de los endpoints /playlist/:id y /playlist.

# Contribución
* Si desea contribuir a este proyecto, puede enviar una solicitud de extracción o abrir un problema.

# Autores
- Gómez Flores Luis Enrique
- Martinez Mendiola Jose Fernando
- Vasquez Rodriguez Gabriel Jairo
- Cauich de la Cruz Gael Alberto
- Estrada Rosas Luis Fernando
- Pech Garcia Nahun Issac 
# Licencia
* Este proyecto está bajo la Licencia MIT
