function receivesAFunction(callback){
    return (callback())
};
function returnsANamedFunction(){
    return function math(a,b){a + b}
};
function returnsAnAnonymousFunction(){
    return (function(){ return "finally done!"})
};