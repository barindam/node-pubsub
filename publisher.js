"use strict"
const {PubSub} = require('@google-cloud/pubsub');
const async = require('async');
const pubsub = new PubSub();


class Publisher{
    
    constructor(){
        // these can be configured form properties
        this.maxMessages = 100;
        this.maxWaitTime = 10000;
    }
    async publishMessage(userdata, topicName){
        const data = JSON.stringify(userdata);
        console.log("User Datais: ", data);
        const dataBuffer = Buffer.from(data);
        const [messageId] = await pubsub
        .topic(topicName, {
            batching: {
            maxMessages: this.maxMessages,
            maxMilliseconds: this.maxWaitTime,
            },
        })
        .publish(dataBuffer);
        console.log(`Message ${messageId} published.`);
    }

}
    
module.exports = Publisher;
