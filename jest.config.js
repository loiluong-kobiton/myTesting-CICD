module.exports = {
    coverageThreshold: {
      global: {
        lines: 80,
        branches: 80,
        function: 80,
        statements: 80,
      },
    },
  };




// "jest": {
//     "coverageThreshold": {
//       "global": {
//         "branches": 75,
//         "functions": 75,
//         "lines": 75,
//         "statements": 75
//       }
//     }
//   },

// module.exports = {
//     testEnvironment: 'node',
    
//     testMatch: [
//       '<rootDir>/__tests__/**/*.js'
//     ],
    
//     collectCoverageFrom: [
//       '<rootDir>/src/**/*.js'
//     ],
//     coverageReporters: ['text-summary', 'json-summary', 'lcov']
//   }
  