var mongoose = require('mongoose');
var uri = 'mongodb://test:0924@localhost/test';
mongoose.connect(uri,function(err){
    if(err)
        console.log("connection failed");
    else
        console.log("connection successful");
});

module.exports = mongoose;