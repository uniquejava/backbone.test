var mongoose = require('mongoose');
var PlatformTask = require('./PlatformTask');
var Receiver = require('./Receiver');
var Message = require('./Message');
var BlueConfig = require('./BlueConfig');
var _ = require('lodash');


mongoose.connect('mongodb://localhost/bluelotus');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function () {
    console.log('yay!');


    PlatformTask.findOne({"taskStatus": "开放招募中"}, function (err, task) {
        var requiredSkills = task.get('taskSkills');


        // status = active, order by vip level desc.
        var messages = [];
        Receiver.find({active: true})
            .sort('-vip.freelevel')
            .exec(function (err, users) {
                if (err) return console.log(err);

                console.log('required skills:', requiredSkills);

                _.each(users, function (user) {
                    var skills = user.get('skill');
                    var skillNames = _.pluck(skills, 'name');
                    console.log("user skills:", skillNames);

                    var common = _.intersection(requiredSkills, skillNames);
                    console.log(common);

                    // match skills
                    if (common.length > 0) {
                        messages.push({
                            user_phone: user.telephone.length > 0 ? users.telephone[0]: '',
                            content: _.template("亲爱的<%=user%>, 去看看新任务吧：任务名称:<%=task%> ")({
                                user: user.get('nickname'),
                                task: task.get('taskName')
                            })
                        });
                    }

                    // max users number
                    if(messages.length === BlueConfig.max_users){
                        return false;
                    }
                });

                console.log('messages: ', messages);


                // insert messages
                Message.create(messages, function(err){
                    if(err) return console.log('save message error');

                    console.log("messages saved");
                });


            });
    });


});

