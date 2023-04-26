const InputArray= [
    1,2,3,4,5,6,7,8
]
const mul = []

function sum(n1,n2,j,cb){
    setTimeout(function(){
        cb(n1+n2,j);
    },100)
}

function multiply(n1,n2,i,cb){
    setTimeout(function(){
        cb(n1*n2,i);
    },200)
}

function print(str){
    console.log(str);
}

let i=0;
let j=0;


multiply(InputArray[i],InputArray[i+1],i+2,use)
function use(result,i){
    mul.push(result)
    if (i >= InputArray.length){
        useSum(mul[j],j)
    } else {
        multiply(InputArray[i],InputArray[i+1],i+2,use)
    }
}

function useSum(result,j){
    if (j==(mul.length-1)){
        sum(result,mul[j],j+1,print)
    } else {
        sum(result,mul[j+1],j+1,useSum)
    }
}