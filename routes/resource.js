var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var mango_controller = require('../controllers/mango');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// mango ROUTES ///
// POST request for creating a mango.
router.post('/mango', mango_controller.mango_create_post);
// DELETE request to delete mango.
router.delete('/mangoss/:id', mango_controller.mango_delete);
// PUT request to update mango.
router.put('/mango/:id', mango_controller.mango_update_put);
// GET request for one mango.
router.get('/mango/:id', mango_controller.mango_detail);
// GET request for list of all mango items.
router.get('/mango', mango_controller.mango_list);
/* GET detail mango page */

module.exports = router;