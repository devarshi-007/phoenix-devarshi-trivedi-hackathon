const data=[
    "devarshi-007","devar-007","chintansakhiya","chintansakiya","Ami-Kalola","aniketgohelimp","Ankit Jilka","Annavar-satish","Bhautik","Bhoomiz01","VatsaL","Rakshit Menpara","dhruvjoshi2000","abcd","Disha-Kothari","Denish Makadiya","JAY PONDA IMPROWISED"
];

const detail=[];
let singleDetail;
let notFound = 0;
let timeStart;
timeStart = Date.now();
for(let singleName of data){
    singleDetail = fetch(`https://api.github.com/users/${singleName}`,{
        headers: {
          authorization: "token xxxxxxxxxxxxxxxxxxxxxxxx"
        }
      }).then(x => x.json()).then(val=>{
        detail.push(val);
        if (val.message=="Not Found"){
            notFound++;
        }
      });
}

let result = setInterval(
    ()=>{
        if(data.length===detail.length){
            console.log(detail);
            console.log("Time: "+(Date.now()-timeStart)/1000);
            console.log("Not Found: "+notFound);
            console.log("Found: "+(detail.length-notFound));
            stopInterval();
        } else {
            console.log("loading...");
        }
    },100
)

function stopInterval() {
    clearInterval(result);
}
