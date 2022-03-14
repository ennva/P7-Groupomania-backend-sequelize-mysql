// Logique de routing //
const express = require('express');
const router = express.Router();

const answerControl = require('../controllers/answer');
const auth = require('../middleware/auth');




// On rajoute le middleware auth sur les routes qu'on veut protéger //
router.post('/new', auth, answerControl.createAnswer);
router.get('/:id/display', auth, answerControl.getAllAnswers);
router.get('/:id', auth, answerControl.getOneAnswer);
router.delete('/:id', auth, answerControl.deleteAnswer);





module.exports = router;