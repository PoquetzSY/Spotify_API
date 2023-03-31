require('dotenv').config();

//const PORT=3000;
const MONGO_URI="mongodb+srv://kael:kael@kaelito.9pphtxr.mongodb.net/?retryWrites=true&w=majority";
//const SECRET=mi-clave-secreta
const host = '0.0.0.0';


module.exports = {
  hostxd: host,
  port: 3000,
  mongoURI: MONGO_URI,
  //secret: process.env.SECRET
};
