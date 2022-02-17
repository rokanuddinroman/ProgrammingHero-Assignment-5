function getInputFromField(inputId) {
    const inputFieldInput = document.getElementById(inputId);
    const inputFieldText = inputFieldInput.value;
    const inputFieldValue = parseFloat(inputFieldText);
    return inputFieldValue;
};

function putInputToResult(inputId) {
    const resultInput = document.getElementById(inputId);
    // const resultText = resultInput.innerText;
    return resultInput;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeTotal = getInputFromField('incomeField');
    const foodTotal = getInputFromField('foodField')
    const rentTotal = getInputFromField('rentField')
    const clothesTotal = getInputFromField('clothesField')
    const myExpenses = putInputToResult('myExpenses');
    const totalExpenses = foodTotal + rentTotal + clothesTotal;
    myExpenses.innerText = totalExpenses;
    const myBalance = putInputToResult('myBalance')
    const totalBalance = incomeTotal - totalExpenses;
    myBalance.innerText = totalBalance;
})