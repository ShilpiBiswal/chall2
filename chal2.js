function calcTip(bill){
    if(bill>=50 && bill<=300)
    {
        return (bill*0.15);
    }else{
        return (bill*0.2);
    }
}

const billValue=calcTip(100);
console.log(billValue);

const bills=new Array(125,555,44);
const tips=new Array(calcTip(125),calcTip(555),calcTip(44));
const totals=new Array(bills[0]+calcTip(125),bills[1]+calcTip(555),bills[2]+calcTip(44));

console.log(bills);
console.log(tips);
console.log(totals);

