const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index'); 
const favRouter = require("./routes/usersFavs");
const morgan = require('morgan');
const cors = require('cors');


server.use(morgan('dev'));
server.use(cors());
server.use(express.json())
server.use("/rickandmorty", router)
server.use("/favs", favRouter)

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});
