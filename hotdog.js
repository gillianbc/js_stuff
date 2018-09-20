function getHotDog () {
    var str = getBun()
    .then(function (bun) {
        // console.log(bun);
        return addSausage(bun);
    })
    .then(function (bunWithSausage) {
        // console.log(bunWithSausage);
        return addSauce(bunWithSausage);
    })
    .then(function (hotdog) {
        // console.log(hotdog);
        return hotdog;
    }).catch((err)=>{
        console.log(err);
    });
    return str;
};

function getBun(){
    return new Promise(function(resolve,reject){
        resolve('bun ');
    });
};
function addSausage(bun){
    return new Promise(function(resolve,reject){
        resolve(bun + 'sausage ');
    });
};
function addSauce(food){
    return new Promise(function(resolve,reject){
        resolve(food + 'sauce ');
    });
};

var snack = getHotDog();
console.log(snack);
