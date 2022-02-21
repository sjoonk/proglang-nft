// scripts/deploy.js
const Caver = require('caver-js')
const Artifact = require('../artifacts/ProgLangNFT.json')
const config = require('./config')

const privateKey = config.privateKey
const klaytnNodeUrl = config.klaytnNodeUrl

async function deploy() {
  const caver = new Caver(klaytnNodeUrl)

  // Add a keyring to caver.wallet
  const deployer = caver.wallet.keyring.createFromPrivateKey(privateKey)
  caver.wallet.add(deployer)

  const gas = 150000000
  const abi = Artifact.compilerOutput.abi
  const data = Artifact.compilerOutput.evm.bytecode.object

  const contract = caver.contract.create(abi)
  const deployed = await contract.deploy({from: deployer.address, gas}, data)
  console.log(deployed.options.address)
}

deploy()
