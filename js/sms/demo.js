var sms = require("node-sms-luosimao");

sms.key = '76b1386376835fd8aeab016377bbxxxx'

sms.send('1867235xxxx', 'hello【我的公司】', function(error, res, body){
    console.log(body);
});