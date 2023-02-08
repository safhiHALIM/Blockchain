import blockchain from "./blockchain.js";
import block from "./block.js";


const CoffeeCoin = new blockchain()

console.log("mine first block ...")
CoffeeCoin.addBlock(new block(1, {price :120, course: "js"}, new Date(2022, 8, 23)))
console.log("mine secend block ...")
CoffeeCoin.addBlock(new block(1, {price :100, course: "Vuejs"}, new Date(2022, 8, 23)))
console.log("mine last block ...")
CoffeeCoin.addBlock(new block(1, {price :800, course: "c#"}, new Date(2022, 8, 23)))


//console.log(JSON.stringify(CoffeeCoin, null, 4))
console.log(" blochchain is valid :",CoffeeCoin.verifyblockchain())
console.log(CoffeeCoin.chain)