const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

// Importation des routeurs //
const userRoutes = require("./routes/user"); // Importation de la route user //
const messageRoutes = require("./routes/message"); // Importation de la route message //
const answerRoutes = require("./routes/answer"); // Importation de la route answer //




const app = express();

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    allowedHeaders: ['sessionId', 'Content-Type'],
    exposedHeaders: ['sessionId'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS',
    preflightContinue: false,
  };
app.use(cors());

/*
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // On accéde à l'API depuis diverses origines //
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Liste requêtes autorisées //
    next();
});
*/

app.use(bodyParser.json()); // App requiert BodyParser //
app.use(helmet());
app.use('/images', express.static(path.join(__dirname, 'images'))); // Pour toute requête envoyée à /images/, on sert ce dossier statique image //

// Enregistrement des routeurs //
app.use('/api/auth', userRoutes);
app.use('/api/messages', messageRoutes); 
app.use('/api/answers', answerRoutes); 


module.exports = app; // On exporte app //