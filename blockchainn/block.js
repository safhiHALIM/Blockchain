import sha256 from "crypto-js/sha256.js"


class block {
    constructor (id, data, timestamp, previous = "0"){
        this.id = id
        this.data = data
        this.timestamp = timestamp 
        this.previous = previous
        this.hash = this.generateHash()
        this.nonce = 0

    }
    
    generateHash(){
        return sha256(this.id + this.nonce + this.timestamp + this.previous + JSON.stringify(this.data) ).toString()
    }

    mineBlock(difficlty){
        while(this.hash.substring(0, difficlty ) !== Array(difficlty + 1).join("0")) {
            this.nonce++
            this.hash = this.generateHash()
        }
        console.log(" block is mined : ", this.hash)
    }
}

export default block