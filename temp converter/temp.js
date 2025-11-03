const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const mysubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
const textBox = document.getElementById("textBox");

let temp;

function convert(){

    if(toCelsius.checked){
        let temp= Number(textBox.value);
        newtemp = temp * (9/5) ;
        result.textContent= newtemp.toFixed(1);
     
    }
    else if(toFahrenheit.checked){
        let temp= Number(textBox.value);
        temp= temp - 9 / 5;

        result.textContent= ("$(temp) F");
    } 
    
    else {
        result.textContent = "Select a unit";
    }
}
