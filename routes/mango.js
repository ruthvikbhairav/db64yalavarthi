var express = require('express'); 
const mango_controlers= require('../controllers/mango'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', mango_controlers.mango_view_all_Page ); 
module.exports = router; 