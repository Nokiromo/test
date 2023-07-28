// отримую доступ до елементів форми

const calculateButton = document.getElementById('Calculate'); //кнопка яка рахує
const beforeTaxInput = document.getElementById('before-tax'); //беремо зарплатню до вирахування 
const afterTaxText = document.getElementById('after-tax'); //зарплатня після вирахування

// функція

calculateButton.addEventListener('click', function() {
    const originalbeforeTaxAmount = Number(beforeTaxInput.value); //роблю з стрінга намбер
    const selectedRadioTip = document.querySelector('input[name="tax"]:checked'); //доступ до обраного елемента-відсотка для обрахування
    // console.log(selectedRadioTip); для перевірки
    const taxValue = Number(selectedRadioTip.value.slice(0,-1))/100; //відкидаю знак відсотка і перетворюю стрінг в нам
    const totalTax = Math.round(originalbeforeTaxAmount * taxValue * 100) / 100;
    const lastResalt = originalbeforeTaxAmount - totalTax;
    afterTaxText.innerText = lastResalt;
}  ) 
