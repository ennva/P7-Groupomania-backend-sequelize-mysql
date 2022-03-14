// Gestion des fichiers entrants dans les requêtes HTTP avec multer //
const multer = require('multer');

// Librairie de traduction des types de fichiers pour développement //
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif'
}; 

const storage = multer.diskStorage({ // Objet storage pour avoir des noms de fichiers uniques //
    destination: (req, file, callback) => { // Req, fichier et callback //
        callback(null, 'images'); // Nom du dossier images en 2ème argument //
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_'); // On élimine les espaces //
        const extension = MIME_TYPES[file.mimetype]; // Création de l'extension diu fichier //
        callback(null, name + Date.now() + '.' + extension); // null:pas d'erreur, nom, rajout timestamp, . , extension //
    }
});

module.exports = multer({ storage }).single('image');