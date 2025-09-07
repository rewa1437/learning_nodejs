const {writeFile} = require('fs')

writeFile('future.txt','anupap pasakornhiran',null,(err)=>{
    if (err) {
        console.error('error => ', err);
        return;
    }

    console.log('write file complete')
    function add(a,b){
        return a + b;
    }
    console.log('test ', add(1,4))
})