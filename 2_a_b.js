// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();

// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:");
console.log(privKey.toString("hex"));

// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:");
console.log(pubKey.toString("hex"));


var public_key_hash = keccak256(pubKey);
console.log(public_key_hash)
console.log("0x"+public_key_hash.slice(24))
// address

let address = wallet.getAddressString();
console.log("address:", address);
