const memoize = require('lodash.memoize');
const https = require('https');
const { DynamoDB } = require('aws-sdk');

const ddbClient = memoize(
  () =>
    new DynamoDB.DocumentClient({
      httpOptions: {
        agent: new https.Agent({
          keepAlive: true
        })
      },
      convertEmptyValues: true
    })
);

module.exports = { ddbClient };
