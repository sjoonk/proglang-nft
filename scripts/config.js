// scripts/config.js
require('dotenv').config()

module.exports = {
  privateKey: process.env.PRIVATE_KEY,
  klaytnNodeUrl: process.env.KLAYTN_NODE_URL,
  tokenBaseUri: process.env.TOKEN_BASE_URI,
  contractAddress: process.env.CONTRACT_ADDRESS
}
