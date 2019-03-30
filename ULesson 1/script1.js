let money = prompt("Ваш бюджет на месяц?" );
let time = prompt("Введите дату в формате YYYY-MM-DD");
const appData = {
    budget: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses: {   
    },
    income:[],
    savings: false
};
for (let i = 0; i < 2; i++){
    let exp1 = prompt ("Введите обязательную статью расходов в этом месяце");
    let exp2 = prompt ("Во сколько обойдется?");
    appData.expenses[exp1] = exp2;
}
alert("Ваш бюджет на день: " + appData.budget/30 + " rub");