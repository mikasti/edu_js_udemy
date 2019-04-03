let money = prompt("Ваш бюджет на месяц?", '' );
let time = prompt("Введите дату в формате YYYY-MM-DD", '');
const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
};
for (let i = 0; i < 2; i++){
  
}
appData.moneyPerDay = appData.budget/30;
alert("Ваш бюджет на день: " + appData.moneyPerDay + " rub");
if (appData.moneyPerDay < 100){
    console.log("Нищеброд");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
    console.log("С пивом покатит");
} else if (appData.moneyPerDay > 2000){
    console.log("Аки царь живешь");
} else {
    console.log("Что-то пошло не так...");
}

/*
let i = 0;
while ( i< 2){
    let exp1 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
    exp2 = prompt ("Во сколько обойдется?", '');
    if ( (typeof(exp1)  === 'string') && (typeof(exp1)  != null) && (typeof(exp2)  != null ) && 
    (exp1 != '') && (exp2 !='') && (exp1.length < 50) ) {
        console.log ("Статья расходов записана!");
        appData.expenses[exp1] = exp2;
    } else {
    }
    i++;
}*/
/*
let i = 0;
do{
    let exp1 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
    exp2 = prompt ("Во сколько обойдется?", '');
    if ( (typeof(exp1)  === 'string') && (typeof(exp1)  != null) && (typeof(exp2)  != null ) && 
    (exp1 != '') && (exp2 !='') && (exp1.length < 50) ) {
        console.log ("Статья расходов записана!");
        appData.expenses[exp1] = exp2;
    } else {
    }
    i++;
} while ( i< 2); */