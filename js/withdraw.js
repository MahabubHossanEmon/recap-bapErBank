document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField =document.getElementById('withdraw-field');
    const newWthdrawAmountString=withdrawField.value;
    const newWthdrawAmount=parseFloat(newWthdrawAmountString);
     

    withdrawField.value='';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString =withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

    const newWithdrawTotal = previousWithdrawTotal + newWthdrawAmount;
    withdrawTotalElement.innerText=newWithdrawTotal;


    const totalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=totalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    totalElement.innerText=newBalanceTotal;


})