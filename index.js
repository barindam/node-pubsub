const Publisher = require('./publisher.js');
const publisher = new Publisher();
// It will be separate for each client and it should come from property file
const topicName='topic_name';

const user={
    type: 1,
    msg_data:{
        id: 23,
        name: "arindam",
        address:"India",
        email:"arindam@abc.com",
        linkedin:"https://www.linkedin.com/in/arindiambiswas70/"
    }
}

console.log('Publishing User Data:', user);
publisher.publishMessage(user,topicName);
