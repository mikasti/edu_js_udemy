let money, time;
function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    
    while( isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", '' );
    }
}
start();
const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: true
};
function checkAnswUser(ans1, ans2){
    if ( (typeof(ans1)  === 'string') && (typeof(ans1)  != null) && (typeof(ans2)  != null ) && (ans1 != '') && (ans2 !='') && (ans1.length < 50) ){
        return true;
    } else{
        return false;
    }
}
function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let exp1 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
        exp2 = prompt ("Во сколько обойдется?", '');
        if (checkAnswUser(exp1, exp2)) {
             console.log ("Статья расходов записана!");
             appData.expenses[exp1] = exp2;
        } else {
        }
    }
}
chooseExpenses();
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++){
        let oexp1 = prompt ("Введите необязательную статью расходов в этом месяце", ''),
        oexp2 = prompt ("Во сколько обойдется?", '');
        if ( checkAnswUser(oexp1, oexp2) ) {
             console.log ("Статья расходов записана!");
             appData.expenses[oexp1] = oexp2;
        } else {
        }
    }
    
}
chooseOptExpenses();
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed(1);
    alert("Ваш бюджет на день: " + appData.moneyPerDay + " rub");    
}
detectDayBudget();
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Денежки есть, а если найду?", ''),
        percent = +prompt("А процентик подскажите?",'');
        appData.monthIncome = save/100/12 + percent;
        alert("Доход с депозита: " + appData.monthIncome);
    }
}
checkSavings();
function detectLevel() {
    if (appData.moneyPerDay < 100){
        console.log("Нищеброд");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
        console.log("С пивом покатит");
    } else if (appData.moneyPerDay > 2000){
        console.log("Аки царь живешь");
    } else {
        console.log("Что-то пошло не так...");
    }
}
detectLevel();