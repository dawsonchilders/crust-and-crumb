const express = require('express');
const router = express.Router();
const startersCtrl = require('../../controllers/api/starters');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/starters
router.post('/', ensureLoggedIn, startersCtrl.create);
// GET /api/starters
router.get('/', ensureLoggedIn, startersCtrl.index);
// DELETE '/:id'
router.delete('/:id', ensureLoggedIn, startersCtrl.delete);

module.exports = router;