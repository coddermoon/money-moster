// all id imports

const incomeValue = document.getElementById('income');
const foodValue = document.getElementById('food');
const rentValue = document.getElementById('rent');
const clothValue = document.getElementById('cloth');
const saveValue = document.getElementById('save');
const calcBtn = document.getElementById('calculate')
const exp = document.getElementById('exp')
const balance = document.getElementById('balance')
const saveBtn = document.getElementById('saveing')
const savingAmount = document.getElementById('saving-amount')
const remainingBalance = document.getElementById('remaining-amount')

// functions

const parseIntoNumber = (value) => {
    const strValue = value.value
    const numberValue = parseFloat(strValue)

    if (isNaN(numberValue)) {
        return 0
    } else {
        return numberValue
    }

}





const calculation = () => {

    const totalExp = parseIntoNumber(foodValue) + parseIntoNumber(rentValue) + parseIntoNumber(clothValue)
    exp.innerText = totalExp;

    const income = parseIntoNumber(incomeValue);
    const totalBalance = income - totalExp;;
    balance.innerText = totalBalance;
    remainingBalance.innerText = totalBalance
    const totalBalanceNumber = parseFloat(totalBalance)
 
if (isNaN(totalBalanceNumber)) {
   alert('its be a number')
    
}else{
    return totalBalanceNumber
}

}



const getPercentage = (partialValue,totalValue) => {
   
const savings = (totalValue * partialValue)/100
 savingAmount.innerText=savings 



 return savings
   
}

 

// write onClick function on Calculate

calcBtn.addEventListener('click', calculation)
saveBtn.addEventListener('click',()=>{
    const totalBalance = calculation();
 
    const percent = document.getElementById('save')
   const savings = getPercentage(parseIntoNumber(percent),parseIntoNumber(incomeValue));

   const remaining = totalBalance - savings


  remainingBalance.innerText = remaining

   
   
})


