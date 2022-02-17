function getInputFromField(inputId) {
    const inputFieldInput = document.getElementById(inputId);
    const inputFieldText = inputFieldInput.value;
    return inputFieldText;

};

function putInputToResult(inputId) {
    const placement = document.getElementById(inputId);
    return placement;
};


document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeText = getInputFromField('incomeField');
    const incomeTotal = parseFloat(incomeText);
    const foodText = getInputFromField('foodField');
    const foodTotal = parseFloat(foodText);
    const rentText = getInputFromField('rentField');
    const rentTotal = parseFloat(rentText);
    const clothesText = getInputFromField('clothesField');
    const clothesTotal = parseFloat(clothesText);
    // Expenses 
    const previousExpenses = putInputToResult('myExpenses');
    let previousExpensesText = previousExpenses.innerText;
    // const previousExpensesValue = parseFloat(previousExpensesText);
    const newExpenses = foodTotal + rentTotal + clothesTotal;
    const totalExpenses = newExpenses;
    // const totalExpenses = newExpenses + previousExpensesValue;
    // Balance 
    const previousBalance = putInputToResult('myBalance');
    // let previousBalanceText = previousBalance.innerText;
    // const previousBalanceValue = parseFloat(previousBalanceText);
    const totalBalance = incomeTotal - totalExpenses;


    if (totalBalance >= 0 && totalExpenses >= 0) {
        previousExpenses.innerText = totalExpenses;
        previousBalance.innerText = totalBalance;
    }
    if (incomeText == "") {
        alert('Help Income');
    }
    else if (foodText == "") {
        alert('Food Rent');
    }
    else if (rentText == "") {
        alert('Help Rent');
    }
    else if (clothesText == "") {
        alert('Clothes Rent');
    }


    if (incomeTotal < 0 || foodTotal < 0 || rentTotal < 0 || clothesTotal < 0) {
        alert('Enter Valid Numbers');
    }
    if (totalExpenses > incomeTotal) {
        alert('Your Expenses Are are Higher then Your Income');
    }

    // string error
    // if (typeof incomeText === 'string') {
    //     alert('Help String Income');
    // }
    // else if (typeof foodText === 'string') {
    //     alert('Food Rent');
    // }
    // else if (typeof rentText === 'string') {
    //     alert('Help Rent');
    // }
    // else if (typeof clothesText === 'string') {
    //     alert('Clothes Rent');
    // }
    // if (totalBalance == NaN) {
    //     alert('Enter Valid Numbers');
    // }

    // if (typeof totalBalance != 'number' && typeof totalExpenses != 'number') {
    //     alert('Enter Valid2 Numbers');
    // }


    // else if (typeof totalBalance == 'number' && typeof totalExpenses == 'number') {
    //     previousExpenses.innerText = totalExpenses;
    //     previousBalance.innerText = totalBalance;
    // }


    // else {

    // }


});



document.getElementById('save-btn').addEventListener('click', function () {
    // previous codes 
    const incomeText = getInputFromField('incomeField');
    const incomeTotal = parseFloat(incomeText);
    // Expenses Items 
    const foodText = getInputFromField('foodField');
    const foodTotal = parseFloat(foodText);
    const rentText = getInputFromField('rentField');
    const rentTotal = parseFloat(rentText);
    const clothesText = getInputFromField('clothesField');
    const clothesTotal = parseFloat(clothesText);
    // Expenses
    // const previousExpensesValue = putInputToResult('myExpenses');
    // let previousExpensesText = previousExpenses.innerText;
    // const previousExpensesValue = parseFloat(previousExpensesText);
    // const newExpenses = foodTotal + rentTotal + clothesTotal;
    // const totalExpenses = newExpenses + previousExpensesValue;
    // const totalExpenses = previousExpensesValue;

    // Old 
    const totalExpenses = foodTotal + rentTotal + clothesTotal;
    // console.log(totalExpenses)
    const totalBalance = incomeTotal - totalExpenses;
    // new codes 
    // Saving Part Start 
    const savePercentageText = getInputFromField('saveField');
    const savePercentage = parseFloat(savePercentageText);
    const mySave = putInputToResult('mySave');
    const totalSave = (savePercentage / 100) * incomeTotal;

    // Saving Part End 
    const remainingBalance = putInputToResult('remainingBalance');
    const totalRemainingBalance = totalBalance - totalSave;

    if (totalRemainingBalance > 0) {
        mySave.innerText = totalSave;
        remainingBalance.innerText = totalRemainingBalance;
    } if (totalRemainingBalance <= 0) {
        alert('Save Little More')
    }
    if (savePercentageText == "") {
        alert('Enter Your Saving');
    }
    if (_.isString(savePercentageText)) {
        alert('Enter Number')
    }

});