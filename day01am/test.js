const morgan = require('morgan')
const  express = require('express')

/*
//call morgan() like we did in express
const m = morgan('combined')

const s = express.static(__dirname+'/static')

console.info(`>>>>> morgan \n${m}`)
console.info(`>>>>> express.static \n${s}`)
*/

let name = 'fred'

let greet = function(name){
    return function(){
        console.info('hello', name)
    }
}


const f = greet('fred')
console.info('>>>>>>',greet)
console.info('>>>>>>', f)
console.info('>>>>>>', f())