    let startBtn = document.getElementById('start'),
        budgetValue = document.getElementsByClassName('budget-value')[0],
        dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
        levelValue = document.getElementsByClassName('level-value')[0],
        expensesValue = document.getElementsByClassName('expenses-value')[0],
        optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
        incomeValue = document.getElementsByClassName('income-value')[0],
        monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
        yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
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

    let money, time;

    function disabledButton() {
        let btnMass = document.getElementsByTagName('button');
        for (let i = 0; i < btnMass.length - 1; i++) {
            btnMass[i].disabled = true;
            btnMass[i].classList.add("faded");
        }
    }
    disabledButton();
    startBtn.addEventListener('click', function (e) {
        time = prompt("Введите дату в формате YYYY-MM-DD", '');
        money = +prompt("Ваш бюджет на месяц?", "");
        while (money == 0 || isNaN(money) || validateStrIsFill(money)) {
            money = +prompt("Ваш бюджет на месяц?", '');
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();
        let btnMass = document.getElementsByTagName('button');
        for (let i = 0; i < btnMass.length - 1; i++) {
            btnMass[i].disabled = false;
            btnMass[i].classList.remove("faded");
        }
    });

    confExpBtn.addEventListener('click', function () {
        let sum = 0;
        for (let i = 0; i < takeAllExpensesInput.length; i++) {
            let exp1 = takeAllExpensesInput[i].value,
                exp2 = takeAllExpensesInput[++i].value;
            if (appData.checkAllExpUser(exp1, exp2)) {
                console.log("Статья обязательных расходов записана!");
                appData.expenses[exp1] = exp2;
                sum += +exp2;
            } else {
                console.log("Вы не указали ничего, статья обязательных расходов НЕ записана :(");
            }
        }
        expensesValue.textContent = sum;
    });

    confOptExpBtn.addEventListener('click', function () {
        for (let i = 0; i < takeAllOptionalExpensesInput.length; i++) {
            let opt = takeAllOptionalExpensesInput[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
        }
    });
    confCountBudgetBtn.addEventListener('click', function () {
        if (appData.budget != undefined) {
            if (appData.isEmpty(appData.expenses) == false) {
                let sum = 0;
                for (let num in appData.expenses) {
                    sum += +appData.expenses[num];
                }
                sum = appData.budget - sum;
                console.log(sum);
                if (sum > 0) {
                    appData.moneyPerDay = (sum / 30).toFixed(1);
                    dayBudgetValue.textContent = appData.moneyPerDay;
                    console.log(appData.moneyPerDay);
                } else {
                    dayBudgetValue.textContent = "Отрицательный расчет";
                    console.log("ОТР!");
                }
            } else {
                appData.moneyPerDay = (appData.budget / 30).toFixed(1);
                dayBudgetValue.textContent = appData.moneyPerDay;
            }
            if (appData.moneyPerDay < 0) {
                levelValue.textContent = "Эээ...Что-то у вас дебит с кредитом не сошелся(((";
            } else if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Нищеброд";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "С пивом покатит";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Аки царь живешь";
            } else {
                levelValue.textContent = "Что-то пошло не так...";
            }
        } else {
            dayBudgetValue.textContent = "Начните расчет!";
        }
    });

    takeIncome.addEventListener('change', function () {
        let items = takeIncome.value;
        appData.income = items.split(", ");
        incomeValue.textContent = appData.income;

    });

    checkIncomeSavings.addEventListener('click', function () {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumIncomeSavings.addEventListener('input', function () {
        if (appData.savings == true) {
            let sum = +sumIncomeSavings.value,
                percent = +percentIncomeSavings.value;
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    percentIncomeSavings.addEventListener('input', function () {
        if (appData.savings == true) {
            let sum = +sumIncomeSavings.value,
                percent = +percentIncomeSavings.value;
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

        }
    });

    function validateStrIsFill(str) {
        if (str == "" || str == null) {
            console.log("Пустая строка! true");
            return true;
        } else {
            console.log("Не пустая строка! false!");
            return false;
        }
    }
    const appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
        isEmpty: function (obj) {
            for (let key in obj) {
                return false;
            }
            return true;
        },
        checkAllExpUser: function (ans1, ans2) {
            if ((typeof (ans1) === 'string') && (typeof (ans1) != null) && (typeof (ans2) != null) && (ans1 != '') && (ans2 != '') && (ans1.length < 50)) {
                console.log("Сработала проверка true!");
                return true;
            } else {
                console.log("Сработала проверка false!");
                return false;
            }
        },

    };

    //appData.chooseIncome();
    /*appData.income.split('.').forEach(function(element){
        console.log("Способы доп. заработка: " + element);
    });
    for (let key in appData){
        console.log("Наша программа включает в себя данные: " + key + " значения: " + appData[key]);
    }*/