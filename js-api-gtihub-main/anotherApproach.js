let login=true;
let Data= [];
let Detail=[];
async function getData(){
    const myData = await fetch(`https://api.github.com/users`);
    const result = await myData.json();
    for(s in result){   
       Data.push(result[s].login);
    }
}

async function getDetail(){
    for(s of Data){
        const myData = await fetch(`https://api.github.com/users/${s}`,{
            headers: {
              authorization: "token xxxxxxxxxxxxxxxxxxxxxxxx"
            }
        });
        const result = await myData.json();
        Detail.push(result);
    }
    login=false;
}

async function main() {
    let time = Date.now();
    let r1 = await getData();
    let r2 = await getDetail();
    let timeEnd = Date.now();
    console.log(Detail)
    console.log("Time: "+(timeEnd-time)/1000);

}

main();
let myInterval= setInterval(
    ()=>{
        if (login==true){
            console.log("loading...");
        }
        else {
            clearInterval(myInterval);
        }
    },500
)
