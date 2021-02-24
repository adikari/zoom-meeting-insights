const CognitoIdentityServiceProvider = jest.fn();
const Lambda = jest.fn();
const S3 = jest.fn();
const SSM = jest.fn();
const SNS = jest.fn();
const SecretsManager = jest.fn();
const DynamoDB = {
  DocumentClient: jest.fn().mockReturnValue({
    put: jest.fn().mockReturnValue({ promise: () => Promise.resolve({}) }),
    get: jest
      .fn()
      .mockReturnValue({ promise: () => Promise.resolve({ Item: {} }) }),
    delete: jest.fn().mockReturnValue({ promise: () => Promise.resolve({}) }),
    update: jest.fn().mockReturnValue({ promise: () => Promise.resolve({}) }),
    query: jest
      .fn()
      .mockReturnValue({ promise: () => Promise.resolve({ Items: [] }) }),
    options: {
      convertEmptyValues: false
    }
  })
};
const EventBridge = jest.fn().mockReturnValue({
  putEvents: jest.fn().mockReturnValue({ promise: () => Promise.resolve() })
});

module.exports = {
  EventBridge,
  DynamoDB,
  SecretsManager,
  SNS,
  SSM,
  S3,
  Lambda,
  CognitoIdentityServiceProvider
};
