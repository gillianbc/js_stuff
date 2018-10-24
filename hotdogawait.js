
async function getHotDog () {
    var hotDog = await getBun();
    hotDog = await addSausage(hotDog);
    hotDog = await addSauce(hotDog);
    await setSnack(hotDog);
    console.log("Inside async func: " + hotDog + " type is " + typeof hotDog);
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
function setSnack(val){
    snack = val;
}
var snack = {};
// It's no use putting log statements outside of the promise chain to view the value of snack
// because the log statements will execute before snack has been set so it will APPEAR not to be setting
// snack.  Snack does get set, it's just no good trying to do things with snack (like logging it to the 
// console) until you've waited for your promises to resolve
getHotDog(snack)
.then(() => {
    console.log('Snack is ' + snack);
});
console.log('End ' + snack);

