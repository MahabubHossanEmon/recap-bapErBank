function getInputFieldValueId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    inputField.value='';
     return inputFieldValue;
}

function getElementValueById(elementId){
    const element =document.getElementById(elementId);
    const elementValueString =element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setTextElementValueId(elementId,newValue){
    const textElement =document.getElementById(elementId);
    textElement.innerText=newValue;
}
//deposit part
document.getElementById('btn-deposit').addEventListener('click',function(){

    const newDepositAmount=getInputFieldValueId('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueId('deposit-total',newDepositTotal);


    const previousBalanceTotal=getElementValueById('balance-total'); 
    const newBalanceTotal=previousBalanceTotal + newDepositAmount;
    setTextElementValueId('balance-total',newBalanceTotal);
     
})


//withdraw part
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount=getInputFieldValueId('withdraw-field');
    const previousWithdrawTotal=getElementValueById('withdraw-total');
    const newWithdrawTotal=newWithdrawAmount + previousWithdrawTotal;
    setTextElementValueId('withdraw-total',newWithdrawTotal);

    const previousBalanceTotal=getElementValueById('balance-total');
    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
    setTextElementValueId('balance-total',newBalanceTotal);
})