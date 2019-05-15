
const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();
// It will be separate for each client and it should come from property file
const subscriptionName = 'subscription_name';
const timeout = 60;

const subscription = pubsub.subscription(subscriptionName);

const messageHandler = message => {

  const data = JSON.parse(message.data.toString());
  console.log('Received message ID is: ', message.id );
  console.log('Message Data is: ', data);
  var dataType = Number(data.type);
  const msg_data = data.msg_data;
  if(msg_data !=undefined){
    switch(dataType){
      case 1:
        console.log('In User: ', dataType);
        // process your messge here
        break;
      default:
        console.log('Invaliv dataType: ', dataType);
        // raise an alert
    }
  }
  //Acknowledge the receipt of message
  message.ack();
};

// Listen for new messages until timeout is hit
subscription.on(`message`, messageHandler);