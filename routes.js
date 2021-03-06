// Require objects.
const express = require('express');
const router = express.Router();
const aws      = require('aws-sdk');
let queueUrl = "";
let receipt  = "";

// Load your AWS credentials and try to instantiate the object.
aws.config.loadFromPath(__dirname + '/config.json');

// Instantiate SQS.
const sqs = new aws.SQS();

// Creats a queue. If the name aleady exists then it is returned.
router.get('/create', (req, res) => {
    const params = {
        QueueName: "Queue"
    };

    sqs.createQueue(params, (err, data) => {
        if(err) {
            res.send(err);
        }
        else {
            queueUrl = data.QueueUrl;
            res.send(data);
        }
    });
});

// Lists all queues.
router.get('/list',  (req, res) => {
    sqs.listQueues((err, data) => {
        if(err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    });
});

// Send a message.
router.get('/send',  (req, res) => {
    var params = {
        MessageBody: 'A new message for the queue "Hello world!"',
        QueueUrl: queueUrl,
        DelaySeconds: 0,
        // Optional
        MessageAttributes: {
            'Title' : {
                DataType: 'String',
                StringValue: 'AWS SQS'
            },
            'Author' : {
                DataType: 'String',
                StringValue: 'Your Name'
            },
            'Mobile' : {
                DataType: 'Number',
                StringValue: '123123123'
            }
        }
    };

    sqs.sendMessage(params, (err, data) => {
        if(err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    });
});

// Receive a message. Puts the message in flight.
// NOTE: This is a great long polling example. You would want to perform
// this action on some sort of job server so that you can process these
// records. In this example I'm just showing you how to make the call.
// It will then put the message "in flight" and I won't be able to
// reach that message again until that visibility timeout is done.
router.get('/receive',  (req, res) => {
    var params = {
        QueueUrl: queueUrl,
        VisibilityTimeout: 600 // 10 min wait time for anyone else to process.
    };

    sqs.receiveMessage(params, (err, data) => {
        if(err) {
            res.send(err);
        }
        else {
            res.send(data);
            receipt = data.Messages[0].ReceiptHandle;
        }
    });
});

// Deletes a message.
router.get('/delete',  (req, res) => {
    var params = {
        QueueUrl: queueUrl,
        ReceiptHandle: receipt
    };

    sqs.deleteMessage(params, (err, data) => {
        if(err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    });
});

// Purgies the entire queue.
router.get('/purge',  (req, res)  =>{
    var params = {
        QueueUrl: queueUrl
    };

    sqs.purgeQueue(params, (err, data) => {
        if(err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    });
});

module.exports = router;