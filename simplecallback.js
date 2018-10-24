//This is my callback function
function greeting(err, result) {
    if (err) console.log('Oops error ' + err);
    if (result) console.log('Hello ' + result);
}

function processUserInput(callback) {
    // var name = 'Gillian';
    var name = 'Bob';

    if (name === 'Bob')
        callback(name, null);
    else
        callback(null, name);

}

processUserInput(greeting);