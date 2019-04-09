let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem =document.getElementsByClassName('expenses-item')
    takeAllExpensesInput = document.getElementsByClassName('expenses-item'),
    confExpBtn = document.getElementsByTagName('button')[0],
    confOptExpBtn = document.getElementsByTagName('button')[1],
    confCountBudgetBtn = document.getElementsByTagName('button')[2],
    takeAllOptionalExpensesInput = document.querySelectorAll('.optionalexpenses-item'),
    takeIncome = document.querySelector('#income'),
    checkIncomeSavings = document.querySelector('#savings'),
    sumIncomeSavings = document.querySelector('#sum'),
    percentIncomeSavings = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    /*allBudget = document.querySelectorAll('.result-table > div'),
    findValueInBudget = allBudget.forEach(function(element, i) {
    if ( i %2 ==1){
      console.log(element); } else {}
    });*/
function validateStrIsFill(str){
    if ( str == "" || str == null)
    {
        console.log ("Пустая строка! true");
        return true;
    } else {
        console.log ("Не пустая строка! false!");
        return false;
    }
}
let money, time;
function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    while( money == 0 || isNaN(money) || validateStrIsFill(money)){
        money = +prompt("Ваш бюджет на месяц?", '' );
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
}
start();
const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let exp1 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
            exp2 = prompt ("Во сколько обойдется?", '');
            if (appData.checkAllExpUser(exp1, exp2)) {
                 console.log ("Статья обязательных расходов записана!");
                 appData.expenses[exp1] = exp2;
            } else {
                console.log ("Вы не указали ничего, статья обязательных расходов НЕ записана :(");
            }
        }
    },
    checkAllExpUser: function(ans1, ans2){
        if ( (typeof(ans1)  === 'string') && (typeof(ans1)  != null) && (typeof(ans2)  != null ) && (ans1 != '') && (ans2 !='') && (ans1.length < 50) ){
            console.log ("Сработала проверка true!");
            return true;
        } else{
            console.log ("Сработала проверка false!");
            return false;
        }
    },
    
    chooseOptExpenses: function(){
        for (let i = 0; i < 3; i++){
            let oexp1 = prompt ("Введите необязательную статью расходов в этом месяце", ''),
            oexp2 = prompt ("Во сколько обойдется?", '');
            if ( checkAnswUser(oexp1, oexp2) ) {
                 console.log ("Статья необязательных расходов записана!");
                 appData.optionalExpenses[oexp1] = oexp2;
            } else {
            }
        }
    },
    chooseIncome: function(){
        let items = prompt ("Что-то принесет вам дополнительные доход? (Укажите через ',' )", '');
        while( validateStrIsFill(items)){
            items = prompt ("Что-то принесет вам дополнительные доход? (Укажите через ',' )", ''); 
        }
        appData.income = items.split(", ");
        console.log("split: " + appData.income);
        appData.income.push(prompt("Может еще что-то?", ""));
        console.log("push: " + appData.income);
        appData.income.sort();
        console.log("sort: " + appData.income);
        appData.income = appData.income.join('.');
        console.log("join: " + appData.income);
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed(1);
        alert("Ваш бюджет на день: " + appData.moneyPerDay + " rub");   
    },
    CheckSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Денежки есть, а если найду?", ''),
            percent = +prompt("А процентик подскажите?",'');
            appData.monthIncome = save/100/12 + percent;
            alert("Доход с депозита: " + appData.monthIncome);
        }
    },
    detectLevel: function(){
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
};
function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    while( money == 0 || isNaN(money) || validateStrIsFill(money)){
        money = +prompt("Ваш бюджет на месяц?", '' );
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
}
appData.chooseIncome();
appData.income.split('.').forEach(function(element){
    console.log("Способы доп. заработка: " + element);
});
for (let key in appData){
    console.log("Наша программа включает в себя данные: " + key + " значения: " + appData[key]);
}
