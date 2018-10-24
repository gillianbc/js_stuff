/**
 *  Illustrates a nice little promise chain
 *  Note how each .then acts like a little production line
 *  and passes on the item
 * 
 *  Every .then results in a promise so you cannot get an
 *  actual hotdog out the other end - just the promise of a
 *  hotdog.  I've left the log statement in for that reason.
 * 
 */
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
        console.log(hotdog);
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

var snack = '';
getHotDog().then(hotDog => snack = hotDog);
console.log('My snack ' + snack);

