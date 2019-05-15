const Email = require('./email.js');
const email = new Email();

const sendTo="arindam.xxxxx@gmail.com";
const subject="Test Mail ..";
const message = "Hey Arindam this is a test mail!"

email.sendMail(sendTo,subject,message);

