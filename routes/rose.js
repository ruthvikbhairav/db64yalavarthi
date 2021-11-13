var express = require('express'); 
const rose_controlers= require('../controllers/rose'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.put('/rose/:id', rose_controlers.rose_update_put); 
module.exports = router; 