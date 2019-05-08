const express = require('express');
const router = express.Router();

const album_controller = require('../controllers/album.controller');

router.get('/', album_controller.landing);
router.post('/create', album_controller.album_create);
router.get('/allRecords', album_controller.album_allRecords); // always put empty one on top of the one with parameters (e.g get("allRecords") get("/:id")
router.get('/:id', album_controller.album_details);
router.put('/:id/update', album_controller.album_update);
router.delete('/:id/delete', album_controller.album_delete);


module.exports = router;