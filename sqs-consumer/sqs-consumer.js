const { Consumer } = require('sqs-consumer');
const AWS = require('aws-sdk');
const https = require('https');

AWS.config.update({region: 'us-west-1'});

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-1.amazonaws.com/128909763231/stripe-sqs-standard',
  handleMessage: async (message) => {
    // do some work with `message`
    console.log(message);
  },
  sqs: new AWS.SQS({
    httpOptions: {
      agent: new https.Agent({
        keepAlive: true
      })
    }
  })
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();