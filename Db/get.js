var Test = require('./test.js');

var getBySex = async function (sex) {
    var json = {
        name: '',
        age: 200,
        sex: ''
    };
    await Test.find({sex: sex}, {'name': 1, 'age': 1, 'sex': 1}, function (err, res) {
        if (err)
            console.log("Error" + err);
        else {
            console.log("Res" + res);
            json = res;
        }

    });
    return json;
};

var getByName = async function (name) {
    var json = {
        name: '',
        age: 200,
        sex: ''
    };
    await Test.find({name: name}, {'name': 1, 'age': 1, 'sex': 1}, function (err, res) {
        if (err)
            console.log("Error" + err);
        else {
            console.log("Res" + res);
            json = res;
        }
    });
    return json;
};

var getAll = async function () {
    var json = 0;
    await Test.find({}, {'name': 1, 'age': 1, 'sex': 1}, function (err, res) {
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
    getBySex,
    getByName,
    getAll
};