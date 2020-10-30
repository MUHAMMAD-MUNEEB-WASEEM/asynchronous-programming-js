//**************code 3************** */

function prepareFood(data){
    let promise = new Promise(function(resolve, reject){

        setTimeout(()=>{
            if (data!=2){
                console.log("prepare food")
                resolve("Food is ready")
            }
            else{
                reject("value not found")//now here what we did is we pass value to prepare food, and if that value=2, then reject runs, so catch part will run only
            }
        }, 1000)
    })
    return promise;
}
function prepareFrenchToast(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("prepare frenchtoast")
            resolve("frenchtoast is ready")
        }, 2000)
    })
    return promise;
}
function prepareCoffee(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("prepare coffee")
            resolve("coffee is ready")
        }, 3000)
    })
    return promise;
}
async function startProcess(){
    let foodvalue = await prepareFood();//wait till preparefood complete and returns resolve response which will store in foodvalue and we can print it
    console.log("Food=", foodvalue)
    
    let toastvalue = await prepareFrenchToast();
    console.log("Toast=", toastvalue);
    
    let coffeevalue = await prepareCoffee();
    console.log("Coffee=", coffeevalue);
 
}
startProcess();

//this saves us from call complete heirarchy of promise

// By using async, we get rid of long hierarchy of then, we can use await as many time as we want with
//many function So it simplify calling a async function which contains timout or api. We get rid of then 
//and catch, we just need to use await with delayed or async function( function needs some time or function
//which has setTimeout or api to fetch) and store it resolve response in some variable which
// we can print
