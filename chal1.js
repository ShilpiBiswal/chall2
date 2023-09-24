'use strict'
const calcaverage=(score1,score2,score3)=>(score1+score2+score3)/3;
const dol1=console.log(calcaverage(44,23,71));
const koa1=console.log(calcaverage(65,54,49));
const dol2=console.log(calcaverage(85,54,41));
const koa2=console.log(calcaverage(23,34,27));

function checkwinner(avgdolphins,avgkoalas){
    if(avgdolphins>avgkoalas){
        return `dolphins win (${avgdolphins} vs ${avgkoalas})`;
    }else{
        return `koalas win (${avgkoalas} vs ${avgdolphins})`;
    }
}

console.log(checkwinner(46,56));
console.log(checkwinner(60,28));
