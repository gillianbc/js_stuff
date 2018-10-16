// The functions I want to call are in another module
var ddd = require('./myfuncs/banana')
//I have an object that has properties containing the names of the functions 
const myobj = {
    schema: 'someschema.xsd',
    transform: 'foo',
    other: 'bar'
  };

// I can call a function that has no args
console.log(myobj['transform']);
var p = myobj['transform'];
ddd[p]();
//I can call a function with an arg
var q = myobj['other'];
console.log(myobj['other']);
ddd[q]('Gillian');

//Or more succinctly...

ddd[myobj['transform']]();
ddd[myobj['other']]('Gillian');