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
        document.getElementById('clothes-alert').style.display = "none";
        document.getElementById('rent-alert').style.display = "none";
        document.getElementById('food-alert').style.display = "none";
        document.getElementById('income-alert').style.display = "none";
        document.getElementById('positive-alert').style.display = "none";
        document.getElementById('limit-alert').style.display = "none";
        document.getElementById('saveLess-alert').style.display = "none";
        document.getElementById('positive2-alert').style.display = "none";
        document.getElementById('saving-alert').style.display = "none";
    }
    if (incomeText == "") {
        document.getElementById('income-alert').style.display = "block";
        document.getElementById('positive-alert').style.display = "none";
        document.getElementById('limit-alert').style.display = "none";
        document.getElementById('saveLess-alert').style.display = "none";
        document.getElementById('positive2-alert').style.display = "none";
        document.getElementById('saving-alert').style.display = "none";
    }
    else if (foodText == "") {
        document.getElementById('food-alert').style.display = "block";
        document.getElementById('income-alert').style.display = "none";
        document.getElementById('positive-alert').style.display = "none";
        document.getElementById('limit-alert').style.display = "none";
        document.getElementById('saveLess-alert').style.display = "none";
        document.getElementById('positive2-alert').style.display = "none";
        document.getElementById('saving-alert').style.display = "none";
    }
    else if (rentText == "") {
        document.getElementById('rent-alert').style.display = "block";
        document.getElementById('food-alert').style.display = "none";
        document.getElementById('income-alert').style.display = "none";
        document.getElementById('positive-alert').style.display = "none";
        document.getElementById('limit-alert').style.display = "none";
        document.getElementById('saveLess-alert').style.display = "none";
        document.getElementById('positive2-alert').style.display = "none";
        document.getElementById('saving-alert').style.display = "none";
    }
    else if (clothesText == "") {
        document.getElementById('clothes-alert').style.display = "block";
        document.getElementById('rent-alert').style.display = "none";
        document.getElementById('food-alert').style.display = "none";
        document.getElementById('income-alert').style.display = "none";
        document.getElementById('positive-alert').style.display = "none";
        document.getElementById('limit-alert').style.display = "none";
        document.getElementById('saveLess-alert').style.display = "none";
        document.getElementById('positive2-alert').style.display = "none";
        document.getElementById('saving-alert').style.display = "none";
    }


    if (incomeTotal < 0 || foodTotal < 0 || rentTotal < 0 || clothesTotal < 0) {
        document.getElementById('positive-alert').style.display = "block";
        document.getElementById('limit-alert').style.display = "none";
        document.getElementById('clothes-alert').style.display = "none";
        document.getElementById('rent-alert').style.display = "none";
        document.getElementById('food-alert').style.display = "none";
        document.getElementById('income-alert').style.display = "none";
        document.getElementById('saveLess-alert').style.display = "none";
        document.getElementById('positive2-alert').style.display = "none";
        document.getElementById('saving-alert').style.display = "none";
        previousExpenses.innerText = 0;
        previousBalance.innerText = 0;
    }
    if (totalExpenses > incomeTotal) {
        document.getElementById('limit-alert').style.display = "block";
        document.getElementById('positive-alert').style.display = "none";
        document.getElementById('clothes-alert').style.display = "none";
        document.getElementById('rent-alert').style.display = "none";
        document.getElementById('food-alert').style.display = "none";
        document.getElementById('income-alert').style.display = "none";
        document.getElementById('saveLess-alert').style.display = "none";
        document.getElementById('positive2-alert').style.display = "none";
        document.getElementById('saving-alert').style.display = "none";
    }


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
        document.getElementById('saveLess-alert').style.display = "none";
        document.getElementById('positive2-alert').style.display = "none";
        document.getElementById('saving-alert').style.display = "none";
    }
    if (savePercentageText == "") {
        document.getElementById('saving-alert').style.display = "block";
        document.getElementById('saveLess-alert').style.display = "none";
        document.getElementById('positive2-alert').style.display = "none";
    }
    if (savePercentage <= 0) {
        document.getElementById('positive2-alert').style.display = "block";
        mySave.innerText = 0;
        remainingBalance.innerText = 0;
        document.getElementById('saveLess-alert').style.display = "none";
        document.getElementById('saving-alert').style.display = "none";
    }
    if (savePercentage > 0) {
        document.getElementById('positive2-alert').style.display = "none";
        document.getElementById('saving-alert').style.display = "none";
    }
    if (totalRemainingBalance < 0) {
        document.getElementById('saveLess-alert').style.display = "block";
        document.getElementById('positive2-alert').style.display = "none";
        document.getElementById('saving-alert').style.display = "none";
        mySave.innerText = 0;
        remainingBalance.innerText = 0;
    }

});