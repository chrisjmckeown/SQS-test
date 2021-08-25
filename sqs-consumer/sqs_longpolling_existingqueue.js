// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-west-1'});

// Create the SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var params = {
 Attributes: {
  "ReceiveMessageWaitTimeSeconds": "20",
 },
 QueueUrl: "https://sqs.us-west-1.amazonaws.com/128909763231/myqueue"
};

sqs.setQueueAttributes(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});