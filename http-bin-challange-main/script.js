//delay
async function getDelay(){
    const response = await fetch("https://httpbin.org/delay/10");
    const delay = await response.json();
}

//uuid
async function getUuid(){
    const response = await fetch("https://httpbin.org/uuid");
    const uuid = await response.json();
    return uuid.uuid;
}

//anything
async function anything(uuid){
    const response = await fetch(`https://httpbin.org/anything`,{method:'POST',body:uuid});
    const anything = await response.json();
    return anything;
}

async function total(){
    let startTime = Date.now();
    let myPromise = getUuid();
    
    myPromise.then(
        function(value){
            getDelay()
            let anyPromise = anything(value);
            anyPromise.then(
                function(value){
                    let endTime = Date.now();
                    console.log(("Time: "+(endTime-startTime)/1000));
                    console.log(value.data);
                }
            )
        }
    )
}

total();