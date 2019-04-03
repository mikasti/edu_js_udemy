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