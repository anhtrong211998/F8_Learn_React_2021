//// declare function
function DeclareFunction(logger){
    console.log(logger);
}
DeclareFunction("this is declare function")

//// Exxperssion function
const ExpersionFunction = function(logger){
    console.log(logger);
}
ExpersionFunction("this is expersion function")

//// Anonymous function/ Arrow function
const ArrowFunction = (logger) => {
    console.log(logger);
}
ArrowFunction("this is arrow function");

//// Sort arrow function
const SortArrowFunc = logger => console.log(logger);
SortArrowFunc("this is arrow function written succinctly")