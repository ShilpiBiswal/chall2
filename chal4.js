const bills=[22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const totals=[];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for(let i=0;i<10;i++){
 
    tips[i]=calcTip(bills[i]);
    totals[i]=calcTip(bills[i])+bills[i];
    
}
console.log(tips);
console.log(totals);

