var Mango = require('../models/mango');

// List of all Mango
exports.mango_list = async function (req, res) {
    try {
        theMango = await Mango.find();
        res.send(theMango);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.mango_view_all_Page = async function (req, res) {
    try {
        theMango = await Mango.find();
        res.render('mango', { title: 'mango Search Results', results: theMango });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.mango_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Mango();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.types = req.body.types;
    document.colours = req.body.colours;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific mango.
exports.mango_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Mango.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Mango delete form on DELETE.
exports.mango_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Mango delete DELETE ' + req.params.id);
};
// Handle mango update form on PUT.
exports.mango_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Mango.findById( req.params.id)
// Do updates of properties
if(req.body.types)
toUpdate.types = req.body.types;
if(req.body.colours) toUpdate.colours = req.body.colours;
if(req.body.cost) toUpdate.cost = req.body.cost;
let result = await toUpdate.save();
console.log("Success " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};