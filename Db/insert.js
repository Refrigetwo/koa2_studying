var Test = require('./test.js');

var insert = async function (name, age, sex) {
    var json = {
        code: 0,
        msg: ''
    };
    try{
        var test = new Test({
            name: name,
            age: age,
            sex: sex
        });
        console.log('before save');
        let saveTest= await test.save();
        json={
            code:200,
            msg:'增加成功'
        };
        console.log(saveTest);
        console.log('after save');
    }catch(err){
        console.log('Error'+err);
    }
    /*await test.save(function (err, res) {
        if (res) {
            json = {
                code: 200,
                msg: '增加成功'
            };
        } else {
            console.log("Error" + err);
        }
        console.log('jsonaaa' + json.code);
    });
    console.log('jsonbbb' + json.code);
    console.log('testbbb' + test);*/
    return json;
};

module.exports = insert;