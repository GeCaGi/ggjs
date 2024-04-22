const express = require('express');
const mongoose = require('mongoose');
const app = express();

const configServer = require("./serverConfig")

require('dotenv').config()




const DB_CHK_INTERVAL = 1000*60*30;
const TIMEOUT_TIME=10000 //tempo timeout in caso di errore 
const PORT = process.env.API_PORT || 3001;
const MAX_DB_CONNECTION_RETRIES = 5;

const connectWithRetry = async () => {
    const retryInterval = 5000; // millisecondi
    for(let i = 0 ; i < MAX_DB_CONNECTION_RETRIES ; i++){
        try {
            await mongoose.connect('mongodb://localhost:27017/GGJSDB', {});
            break;
        }
        catch (error) {
            console.error(`Errore durante la connessione al database: ${error.message}`);
            console.log(`Ritentando la connessione (tentativo ${i}/${MAX_DB_CONNECTION_RETRIES})...`);
            await new Promise(resolve => setTimeout(resolve, retryInterval));
        }
    } 
};

connectWithRetry()

try {
    configServer(app)
    var server = app.listen(PORT, () => {
        console.log(`Server in ascolto sulla porta ${PORT}`);
    });
} catch (error) {
    console.error('Errore durante l\'avvio del server:', error);
    process.exit(1);
}


/*
function handleSIGINT() {
  try {
    if (server) {
      console.log('Stop del server...');
      server.close();
      console.log('Server stoppato con successo.');
    }
    mongoose.connection.close();
    console.log('Connessione al database chiusa con successo.');
    process.exit(0);
  } catch (error) {
    console.error('Errore durante la chiusura:', error);
    process.exit(1);
  }
}
*/