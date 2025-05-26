const butttonIncreaseEl=document.querySelector(".counter__button--increase");
const countervalueEl=document.querySelector(".counter__value");
const buttonDecreaseE1=document.querySelector(".counter__button--decrease");
const resetButtonE1=document.querySelector(".counter__reset-button");
const counterE1=document.querySelector(".counter");
const counterTitleEl=document.querySelector(".counter__title");
resetButtonE1.addEventListener('click',function(){
   countervalueEl.textContent=0;

   counterE1.classList.remove('counter--limit');
   counterTitleEl.innerHTML="Fancy Counter";
   butttonIncreaseEl.disabled=false;
   buttonDecreaseE1.disabled=false;
   


});


butttonIncreaseEl.addEventListener('click',function(){
const currentValue=countervalueEl.textContent;
const currentValueAsanumber=+currentValue;
let newvalue=currentValueAsanumber+1;
if(newvalue>5){
    newvalue=5;

    counterE1.classList.add('counter--limit');
    counterTitleEl.innerHTML='Limit! pro for <b>buy</b> greaterthan 5';
    butttonIncreaseEl.disabled=true;
   buttonDecreaseE1.disabled=true;


}

countervalueEl.textContent=newvalue;


});

buttonDecreaseE1.addEventListener('click',function(){

    const currentValue=countervalueEl.textContent;
    const currentValueAsanumber=+currentValue;
    let newvalue=currentValueAsanumber-1;
    if(newvalue<0){
        newvalue=0;
    }
    countervalueEl.textContent=newvalue;
    
    
    



});
