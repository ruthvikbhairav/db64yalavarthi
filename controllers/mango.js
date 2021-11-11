const mango = require('../models/mango');
const mangos = require('../models/mango');
var mango = require('../models/mango');
//module.exports = mongoose.model("mango", mangoSchema)


// List of all mango
exports.mango_list = async function (req, res) {
    try {
        theMango = await mango.find();
        res.send(theMango);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.mango_view_all_Page = async function(req, res) { 
    try{ 
        theMango = await Mango.find(); 
        console.log(theMango)
        res.render('mango', { title: 'mango Search Results', results: theMango }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.mango_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Mango(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.types = req.body.types; 
    document.colours = req.body.colours; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific mango.
exports.mango_detail = function(req, res) {
res.send('NOT IMPLEMENTED: mango detail: ' + req.params.id);
};
// Handle mango delete form on DELETE.
exports.mango_delete = function(req, res) {
res.send('NOT IMPLEMENTED: mango delete DELETE ' + req.params.id);
};
// Handle mango update form on PUT.
exports.mango_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: mangoupdate PUT' + req.params.id);
};