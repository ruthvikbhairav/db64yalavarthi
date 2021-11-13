var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var mango_controller = require('../controllersmango');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
///mango ROUTES ///
// POST request for creating amango.
router.post('mango',mango_controller.ro_secreate_post);
// DELETE request to deletemango.
router.delete('/mango/:id',mango_controller.mango_delete);
// PUT request to updatemango.
router.put('mango/:id',mango_controller.mango_update_put);
// GET request for onemango.
router.get('mango/:id',mango_controller.mango_detail);
// GET request for list of allmango items.
router.get('mango',mango_controller.mango_list);
/* GET detailmango page */

module.exports = router;