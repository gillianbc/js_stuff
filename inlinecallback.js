function foo(name, callback) {
    console.log('Starting ' + name);
    const result = functionA();
    callback(result);
}
  
  
foo('Gillian', function(result) {
    console.log(result)
});


function functionA(){
    return 'monkeyface';
};

function validate(num1, num2, callback){
    if (num1 === num2)
        callback(null,0)
    else
        callback(-1,null);
};
var a;
validate(1,2,function(err,result){
    if (err) console.log('Not same');
    else console.log('same');
    a = {err,result};
});

console.log(a);  //{ err: -1, result: null }

var b;
validate(1,1,function(err,result){
    if (err) console.log('Not same');
    else console.log('same');
    b = {err,result};
});

console.log(b);  // err: null, result: 0 }