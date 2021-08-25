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
    Key: {
      orderId: "12345"
    }
  }
try {
  const data = await documentClient.get(params).promise();
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
// exports.handler = function (event, context, callback) {
//   const ddb = new AWS.DynamoDB({apiVersion: "2012-10-08"})
//   const documentClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'})

//   // const params = {
//   //   TableName: "stripe-payment",
//   //   Key: {
//   //     orderId: {
//   //       S: "12345"
//   //     }
//   //   }
//   // }

//   // ddb.getItem(params, (err,data)=>{
//   //   if(err){
//   //     console.log(err)
//   //   }
//   //   console.log(data)
//   // })

//   const params = {
//     TableName: "stripe-payment",
//     Key: {
//       orderId: "12345"
//     }
//   }

//   documentClient.get(params, (err,data)=>{
//     if(err){
//       console.log(err)
//     }
//     console.log(data)
//   })
// }