module.exports = {
  CognitoUserPool: jest.fn().mockImplementation(require('./CognitoUserPool')),
  CognitoUserAttribute: jest
    .fn()
    .mockImplementation(require('./CognitoUserAttribute')),
};
