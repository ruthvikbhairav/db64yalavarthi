exports.api = function(req, res) { 
    res.write('['); 
    res.write('{"resource":"mango", '); 
    res.write('  "verbs":["GET","PUT", "DELETE"] '); 
    res.write('}'); 
    res.write(']') 
    res.send(); 
};