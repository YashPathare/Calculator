let calculation=localStorage.getItem('calculation') || '';
displayCalculation();
function updateCalculation(operator)
{
    calculation+=operator;
    displayCalculation();
    localStorage.setItem('calculation',calculation);
}
function displayCalculation()
{
    document.querySelector('.js-cal').innerHTML=calculation;
}
function backButton() 
{
    calculation = calculation.substring(0, calculation.length - 1);
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}