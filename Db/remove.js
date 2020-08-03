var Test = require('./test.js');

var removeByName = async function (name) {
    var json = 0;
    await Test.deleteMany({name: name}, {}, function (err, res) {
        if (err)
            console.log("Error" + err);
        else {
            console.log("Res" + res);
            json = res;
        }

    });
    return json;
};

var removeBySex = async function (sex) {
    var json = 0;
    await Test.deleteMany({sex: sex}, {}, function (err, res) {
        if (err)
            console.log("Error" + err);
        else {
            console.log("Res" + res);
            json = res;
        }

    });
    return json;
};

module.exports = {
    removeByName,
    removeBySex
};