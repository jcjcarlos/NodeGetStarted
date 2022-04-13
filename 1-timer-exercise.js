
function getCallBackConsoleLog(){
    return function (message){
        console.log(message);
    }
}

const executeMyFunctionTime = function(functionTime, getCallback,timeMiliseconds,message){
    functionTime(getCallback(), parseInt(timeMiliseconds) * 1000,message);
}

const executeMyFunctionTimeHelloWorld = function(functionTime, time,message){
    executeMyFunctionTime(functionTime,getCallBackConsoleLog, time,message)
}

const mySetTimeOut = function(time){
    executeMyFunctionTimeHelloWorld(setTimeout, 4, `Hello world after ${time} seconds`);
}

const mySetInterval = function(time){
    executeMyFunctionTimeHelloWorld(setInterval,3,`Hello World Every ${time} seconds`);
}

mySetTimeOut(4);
mySetInterval(3);


