// digiCoin Blockchain
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const { Blockchain, Transaction } = require("./blockchain");

const myKey = ec.keyFromPrivate(
  "014eeaf0ed8278861fbccadb939c390b323bbfe39faf7bfe28d067eda64051ee"
);
const myWalletAddress = myKey.getPublic("hex");

let digiCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key of Receiver", 10);
tx1.signTransaction(myKey);
digiCoin.addTransaction(tx1);

console.log("\nStarting the miner...");
digiCoin.minePendingTransactions(myWalletAddress); // parameter miners address (lets take our for example);

console.log(
  "\nBalance of miner-address is ",
  digiCoin.getBalanceOfAddress(myWalletAddress)
);

//digiCoin.chain[1].transactions[0].amount = 100;
console.log("Is Blockchain valid? " + digiCoin.isChainValid());

//console.log(JSON.stringify(digiCoin, null, 4));
