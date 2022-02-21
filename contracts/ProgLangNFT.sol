// SPDX-License-Identifier: MIT
pragma solidity ^0.5.1;

import "@klaytn/contracts/token/KIP17/KIP17Token.sol";

contract ProgLangNFT is KIP17Token {
  constructor() public KIP17Token("ProgLang NFT", "PROGLANG") {
  }

  // https://docs.opensea.io/docs/contract-level-metadata
  function contractURI() public view returns (string memory) {
      return "https://raw.githubusercontent.com/sjoonk/my-nft/master/metadata/proglang/contract";
  }
}
