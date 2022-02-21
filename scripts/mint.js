// scripts/mint.js
const Caver = require('caver-js')
const Artifact = require('../artifacts/ProgLangNFT.json')
const config = require('./config')
const { privateKey, klaytnNodeUrl, tokenBaseUri, contractAddress } = config

async function mint(receiver, tokenId) {
  const caver = new Caver(klaytnNodeUrl)

  // Add a keyring to caver.wallet
  const deployer = caver.wallet.keyring.createFromPrivateKey(privateKey)
  caver.wallet.add(deployer)

  const gas = 150000000
  const abi = Artifact.compilerOutput.abi

  const deployed = caver.contract.create(abi, contractAddress)
  const receipt = await deployed.send({from: deployer.address, gas},
      'mintWithTokenURI', receiver, tokenId, `${tokenBaseUri}/${tokenId}`)
  console.log(receipt)
}

if (process.argv.length !== 4) {
  console.log('Usage: mint receiver tokenId')
  process.exit(1)
}

mint(process.argv[2], parseInt(process.argv[3]))
