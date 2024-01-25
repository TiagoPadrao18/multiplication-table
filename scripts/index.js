const value = document.getElementsByClassName("number");
const mult = document.getElementsByClassName("mult");
const result = document.getElementsByClassName("result");
const multiplier = document.getElementsByClassName("multiply");
const input = document.getElementById("inputType");
const calculate = document.getElementById("buttonCalculate");

let clickedNumber = 0;
for (let i = 0; i < value.length; i++) {
  value[i].addEventListener("click", () => {
    clickedNumber = value[i].value;
    input.value += clickedNumber;
    for (let j = 0; j < mult.length; j++) {
      mult[j].innerText = clickedNumber;
    }

    for (let f = 0; f < result.length; f++) {
      for (let k = 0; k < multiplier.length; k++) {
        console.log(multiplier[k].textContent);
        result[f].innerText = clickedNumber * multiplier[f].textContent;
      }
    }
  });
}

calculate.addEventListener("click",()=>{
    let number ;
    for (let i = 0; i < mult.length; i++) {
         number = input.value;
        mult[i].innerText = input.value;
    }

    for (let f = 0; f < result.length; f++) {
        for (let k = 0; k < multiplier.length; k++) {
          console.log(multiplier[k].textContent);
          result[f].innerText = number * multiplier[f].textContent;
        }
      }
    
})


    


