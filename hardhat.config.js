require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x8d50b85e809821452f05916b274e95fadea59a536f247425ca1c3ac083986e9a"], //Your private key starting with "0x"y    },
  },
};
