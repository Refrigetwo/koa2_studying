var Test = require('./test.js');

var update = async function (name, age, sex) {
    var json = {
        name: '',
        age: 200,
        sex: ''
    };
    await Test.findOneAndUpdate({name: name}, {age: age, sex: sex}, {new: true}, function (err, res) {
        if (err)
            console.log("Error" + err);
        else {
            console.log("Res" + res);
            json = res;
        }

    });
    return json;
};

module.exports = update;