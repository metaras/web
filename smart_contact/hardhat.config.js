// https://eth-ropsten.alchemyapi.io/v2/KxRWLJjezAxyj4qP_D1GrKikW594TR-A
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/KxRWLJjezAxyj4qP_D1GrKikW594TR-A',
      accounts: ['dcc53e9894b0d45dd79d2dfeebea0a514c4b4fbd69e78626d06f0d231373ba9a'],
    },
  },
};