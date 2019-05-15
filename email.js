var mailgun = require("mailgun-js");
const async = require('async');
var DOMAIN = 'mydomain.com'

class Email{
    constructor(){
        this.mailgun = require('mailgun-js')({apiKey: 'mymailginapikey', domain: DOMAIN});
    }

    sendMail(sendTo, mail_subject, message){
        var data = {
                from: 'contact@mydomain.com',
                to: sendTo,
                subject: mail_subject,
                text: message
        };
        this.mailgun.messages().send(data, function (error, body) {
                console.log(body);
        });
    }

}

module.exports = Email;