// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-west-1'});

AWS.region
exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({apiVersion: "2012-10-08"})
  const documentClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'})

  const params = {
    TableName: "stripe-payment",
    Item: {
      orderId: event.id,
      detail: event.detail
    }
  }
try {
  const data = await documentClient.put(params).promise();
  console.log(data)
} catch (err){
    console.log(err)
  }
}

// // Load the AWS SDK for Node.js
// const AWS = require('aws-sdk');
// // Set the region
// AWS.config.update({region: 'us-west-1'});

// AWS.region
// exports.handler = async (event, context) => {
//   const ddb = new AWS.DynamoDB({apiVersion: "2012-10-08"})
//   const documentClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'})

//   const params = {
//     TableName: "stripe-payment",
//     Item: {
//       orderId: "123456",
//       firstName: "John",
//       lastName: "Doe"
//     }
//   }
// try {
//   const data = await documentClient.put(params).promise();
//   console.log(data)
// } catch (err){
//     console.log(err)
//   }
// }