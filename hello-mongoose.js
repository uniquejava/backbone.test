var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function (callback) {
    console.log('yay!');

    // schema
    var KittySchema = mongoose.Schema({
        name: String
    });
    KittySchema.methods.speak = function () {
        var greeting = this.name ? 'My name is' + this.name : "I don't have a name";
        console.log(greeting);
    };

    // model
    var Kitten = mongoose.model('Kitten', KittySchema);

    // property
    var xx = new Kitten({name: 'xxx'});
    console.log(xx.name);

    // call method
    var yy = new Kitten({name: 'yy'});
    yy.speak();

    // save
    yy.save(function (err, yy) {
        if (err) {
            console.log(err);
            return;
        }

        console.log(yy);
    });

    // find all
    Kitten.find(function (err, kittens) {
        if (err) {
            console.log(err);
            return;
        }

        console.log(kittens);
    });

    // find by (name starts with 'y')
    Kitten.find({name: /^y/}, function (err, kittens) {
        if (err) {
            console.log(err);
            return;
        }

        console.log(kittens);
    });

});

