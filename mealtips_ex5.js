var bills = {
    mealprices: [124, 48, 268, 180, 42],
    calcTips: function(){
        var tiprate = [20,15,10];
        var tiplimits = [50,200];
        this.tips = [];
        this.finalprices = [];
        var rate = 0;
        for (let i = 0; i < this.mealprices.length; i++) {
            const mealprice = this.mealprices[i];
            switch (true) {
                case mealprice < tiplimits[0]:
                    rate = tiprate[0];
                case mealprice < tiplimits[1]:
                    rate = tiprate[1];
                default:
                    rate = tiprate[2];
            }
            this.tips[i] = mealprice * rate / 100;
            this.finalprices[i] = this.tips[i] + mealprice;
        };   
    }
        
};

bills.calcTips();

console.log(bills);

