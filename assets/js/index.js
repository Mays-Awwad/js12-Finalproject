const minusButton=document.querySelector(".Add-to-cart .row .information .AddtoCart .btn1 .minus");
const plusButton=document.querySelector(".Add-to-cart .row .information .AddtoCart .btn1 .plus");
const inputField=document.querySelector(".Add-to-cart .row .information .AddtoCart .btn1 input");
const paraDesc=document.querySelector(".Add-to-cart .row .information .desc-para p");
const infoDesc=document.querySelector(".Add-to-cart .row .information .addInfo-para");


function increaseNumber(){
  const currentValue=Number(inputField.value) || 0;
  inputField.value=currentValue + 1;
}

function decreaseNumber(){
  const currentValue=Number(inputField.value) || 0;
  inputField.value=currentValue - 1;
}

function myFunction(){
  paraDesc.style.display="block";
}

function AdditionInfo(){
  infoDesc.style.display="block";
}