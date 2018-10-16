var john = {
    height: 1.8,
    weight: 80,
    calcBMI: function(){
        this.bmi = this.weight / (this.height * this.height);
    },
};

var tom = {
    height: 1.7,
    weight: 80,
    calcBMI: function(){
        this.bmi = this.weight / (this.height * this.height);
    },
};

john.calcBMI();
console.log(john.bmi);
tom.calcBMI();
console.log(tom.bmi);
if (tom.bmi > john.bmi) {
    console.log('tom is fatter')
} else
    console.log('john is fatter')