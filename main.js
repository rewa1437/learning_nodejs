const { rejects } = require('assert')
const {writeFile} = require('fs')
const { resolve } = require('path')

// writeFile('future.txt','anupap pasakornhiran',null,(err)=>{
//     if (err) {
//         console.error('error => ', err);
//         return;
//     }

//     console.log('write file complete')
//     function add(a,b){
//         return a + b;
//     }
//     console.log('test ', add(1,4))
// })


function writefileprom() {
    return new Promise((resolve,rejects)=>{
        writeFile('future.txt','anupap pasakornhiran',null,(err)=>{
            if (err) {
                rejects(err)
                return
            }
            resolve('writefile complete')
        })
    })
}

function add(a,b){
    return a + b;
}

async function main(){
    const writefileres = await writefileprom();
    console.log('res =>',writefileres);
    console.log('test',add(1,99))
}

main();