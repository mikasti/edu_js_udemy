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
    //querySelector ( год, месяц, день)
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
      console.log(element); } else {

      }
    });*/