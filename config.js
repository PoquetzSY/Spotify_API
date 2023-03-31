require('dotenv').config();

//const PORT=3000;
const MONGO_URI="mongodb+srv://kael28:pruebas123@kaelito.9pphtxr.mongodb.net/?retryWrites=true&w=majority";
//const SECRET=mi-clave-secreta


module.exports = {
  port: 3000,
  mongoURI: MONGO_URI,
  //secret: process.env.SECRET
};
