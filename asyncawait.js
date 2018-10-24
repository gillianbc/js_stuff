// Illustrates that only the await stuff within the async function
// happens in the order it is written

console.log('***  Want to hear a joke?');
asyncawait();
asyncawait2();
console.log('***  Was it funny?');

async function asyncawait(){
    console.log('Knock knock');

    await delay(5000);
    console.log("Who's there?");

    await delay(1000);
    console.log("async/await");
};

async function asyncawait2(){

    await delay(1000);
    console.log("I am closing the door now");

}

function delay(timeInMillisconds){
    dummy = () => {};
    setTimeout(dummy,timeInMillisconds);
}

