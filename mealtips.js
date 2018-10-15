var bills = [124, 48, 268];



function calcTip(mealprice){
    var tiprate = [20,15,10];
    var tiplimits = [50,200];

    switch (true) {
        case mealprice < tiplimits[0]:
            return mealprice * tiprate[0] / 100;
        case mealprice < tiplimits[1]:
            return mealprice * tiprate[1] / 100;
        default:
            return mealprice * tiprate[2] / 100;
    }
};
function addTip(mealprice){
    return mealprice + calcTip(mealprice);
}
var tips, finalprice = [];
tips = bills.map(calcTip);
finalprice = bills.map(addTip);
console.log(tips);
console.log(finalprice);
