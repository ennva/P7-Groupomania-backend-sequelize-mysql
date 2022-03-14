// Logique de routing //
const express = require('express');
const router = express.Router();

const messageControl = require('../controllers/message');
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config');//


// On rajoute le middleware auth sur les routes qu'on veut protéger //
router.post('/new', auth, messageControl.createMessage);
router.delete('/:id', auth, messageControl.deleteMessage);
router.get('/:id', auth, messageControl.getOneMessage);
router.get('/', auth, messageControl.getAllMessages);





module.exports = router;