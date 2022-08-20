// all id imports

const incomeValue = document.getElementById('income');
const foodValue = document.getElementById('food');
const rentValue = document.getElementById('rent');
const clothValue = document.getElementById('cloth');
const saveValue = document.getElementById('save');
const calcBtn = document.getElementById('calculate')
const exp = document.getElementById('exp')
const balance = document.getElementById('balance')

// functions

const parseIntoNumber = (value)=>{
const strValue = value.value
const numberValue = parseFloat(strValue)

if (isNaN(numberValue)) {
    return 0
}else{
    return numberValue
}

}



const calculation = ()=>{
    
    const totalExp = parseIntoNumber(foodValue)+ parseIntoNumber(rentValue)+ parseIntoNumber(clothValue)
    exp.innerText = totalExp;

    const income = parseIntoNumber(incomeValue);
    const totalBalance =  income -totalExp ;;
    balance.innerText = totalBalance;

    return totalBalance


}


// write onClick function on Calculate

calcBtn.addEventListener('click',calculation)

