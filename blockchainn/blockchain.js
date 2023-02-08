import block from "./block.js";

class blockchain{
    constructor() {
      this.chain = [this.newGenesisBlock()]
      this.difficulty = 3
     
    }


    newGenesisBlock(){
        return new block(0, null, new Date(), "0")
    }


    //befor add
    
    verifyblockchain(){
        for(let i = 1; i < this.chain.length; i++){

            let currentBlock = this.chain.at(i)
            let previousBlock = this.chain.at(i - 1)

            if(currentBlock.hash !== currentBlock.generateHash() || currentBlock.previous !== previousBlock.hash){

                return false
            }
        }

        return true
    }

    addBlock(newBlock){
        newBlock.previous = this.chain.at(-1).hash
        newBlock.mineBlock(this.difficulty)
        newBlock.hash = newBlock.generateHash()
        this.chain.push(newBlock)
    }



    //after add

    verifyblockchain(){
        for(let i = 1; i < this.chain.length; i++){

            let currentBlock = this.chain.at(i)
            let previousBlock = this.chain.at(i - 1)

            if(currentBlock.hash !== currentBlock.generateHash() || currentBlock.previous !== previousBlock.hash){

                return false
            }
        }

        return true
    }

} 

export default blockchain