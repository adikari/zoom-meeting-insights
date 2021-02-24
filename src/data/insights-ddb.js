const { Table, Entity } = require('dynamodb-toolbox');
const { ddbClient } = require('../clients/ddb');

const getInsightsTable = () =>
  new Table({
    name: process.env.INSIGHTS_TABLE_NAME,
    partitionKey: 'pk',
    sortKey: 'sk',
    DocumentClient: ddbClient()
  });

const getMeetingEntity = () =>
  new Entity({
    name: 'meeting',
    table: getInsightsTable(),
    attributes: {
      pk: { prefix: 'insight#', hidden: true, partitionKey: true },
      sk: {
        hidden: true,
        sortKey: true
      }
    }
  });

module.exports = { getInsightsTable, getMeetingEntity };
