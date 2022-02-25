
function spy(){
    console.log("this is a callback")
}
function receivesAFunction(spy){
    spy()
}

function returnsANamedFunction(){
    return function logHi(){
        console.loh("hi")
    }
}

function returnsAnAnonymousFunction()
{
 return(function () {console.log('Hello')});
}