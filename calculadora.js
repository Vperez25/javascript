var num1, num2, numAux, esResultado = false, operador = null;
var displayUpper = document.getElementById("display-upper");
var displayBottom = document.getElementById("display-bottom");

function sumar(num1, num2){

    return num1 + num2;
}

function restar(num1, num2){

    return num1 - num2;
}

function multiplicar(num1, num2){

    return num1 * num2;
}

function dividir(num1, num2){

    if(num2 > 0){

        return num1 / num2;
    }
    else{
        return "Indefinido";
    }
}

function resultado(){

   if(operador != null){

       if(operador === "+"){
           num2 = parseInt(displayBottom.innerText);
           displayUpper.innerText += " " + displayBottom.innerText + " =";
           numAux = sumar(num1, num2);
           displayBottom.innerText = numAux;
       }
       else if(operador === "-"){
           num2 = parseInt(displayBottom.innerText);
           displayUpper.innerText += " " + displayBottom.innerText + " =";
           numAux = restar(num1, num2);
           displayBottom.innerText = numAux;
       }
       else if(operador === "*"){
           num2 = parseInt(displayBottom.innerText);
           displayUpper.innerText += " " + displayBottom.innerText + " =";
           numAux = multiplicar(num1, num2)
           displayBottom.innerText = numAux;
       }
       else if(operador === "/"){
           num2 = parseInt(displayBottom.innerText);
           if(num2 > 0){

               displayUpper.innerText += " " + displayBottom.innerText + " =";
               numAux = dividir(num1, num2);
               displayBottom.innerText = numAux ;
           }
           else if(num2 === 0){
               displayBottom.innerText= "Indefinido";
           }

       }
       esResultado = true;
        num1 = numAux
       numAux = null;
       num2 = null;
       operador = null;
   }
}

function add0(){
    if(displayBottom.innerText.length < 8){

        if(displayBottom.innerText !== "0"){
            displayBottom.innerText+= "0";
        }

    }
}
function add1(){
    if(displayBottom.innerText.length < 8){
        if(num1 != null){
            displayBottom.innerText = "";
        }
        if(displayBottom.innerText !== "0"){
            displayBottom.innerText+= "1";
        }
        else{
            displayBottom.innerText = "1";
        }

    }
}
function add2(){
    if(displayBottom.innerText.length < 8){
        if(num1 != null){
            displayBottom.innerText = "";
        }
        if(displayBottom.innerText !== "0"){
            displayBottom.innerText+= "2";
        }
        else{
            displayBottom.innerText = "2";
        }

    }
}

function add3(){
    if(displayBottom.innerText.length < 8){
        if(num1 != null){
            displayBottom.innerText = "";
        }
        if(displayBottom.innerText !== "0"){
            displayBottom.innerText+= "3";
        }
        else{
            displayBottom.innerText = "3";
        }

    }
}

function add4(){
    if(displayBottom.innerText.length < 8){
        if(num1 != null){
            displayBottom.innerText = "";
        }
        if(displayBottom.innerText !== "0"){
            displayBottom.innerText+= "4";
        }
        else{
            displayBottom.innerText = "4";
        }

    }
}

function add5(){
    if(displayBottom.innerText.length < 8){
        if(num1 != null){
            displayBottom.innerText = "";
        }
        if(displayBottom.innerText !== "0"){
            displayBottom.innerText+= "5";
        }
        else{
            displayBottom.innerText = "5";
        }

    }
}

function add6(){
    if(displayBottom.innerText.length < 8){
        if(num1 != null){
            displayBottom.innerText = "";
        }
        if(displayBottom.innerText !== "0"){
            displayBottom.innerText+= "6";
        }
        else{
            displayBottom.innerText = "6";
        }
    }
}

function add7(){
    if(displayBottom.innerText.length < 8){
        if(num1 != null){
            displayBottom.innerText = "";
        }
        if(displayBottom.innerText !== "0"){
            displayBottom.innerText+= "7";
        }
        else{
            displayBottom.innerText = "7";
        }
    }
}

function add8(){


    if(displayBottom.innerText.length < 8){

        if(num1 != null){
            displayBottom.innerText = "";
        }
        if(displayBottom.innerText !== "0"){

            displayBottom.innerText += "8";
        }
        else{

            displayBottom.innerText = "8";
        }

    }
}

function add9(){

    if(displayBottom.innerText.length < 8){

        if(num1 != null){
            displayBottom.innerText = "";
        }
        if(displayBottom.innerText !== "0"){
            displayBottom.innerText+= "9";
        }
        else{
            displayBottom.innerText = "9";
        }

    }
}

function suma(){


    if(displayBottom.innerText !== ""){

        num1 = parseInt(displayBottom.innerText);
        displayUpper.innerText = num1 + " +";
        operador = "+";
        displayBottom.innerText = "0";
        esResultado = false;
    }

}


function resta(){


    if(displayBottom.innerText!== ""){

        num1 = parseInt(displayBottom.innerText);
        displayUpper.innerText = num1 + " -";
        operador = "-";
        displayBottom.innerText = "0";
        esResultado = false;
    }

}

function multiplicacion(){


    if(displayBottom.innerText !== ""){

        num1 = parseInt(displayBottom.innerText);
        displayUpper.innerText = num1 + " x";
        operador = "*";
        displayBottom.innerText = "0";
        esResultado = false;
    }
}
function division(){


    if(displayBottom.innerText !== ""){

        num1 = parseInt(displayBottom.innerText);
        displayUpper.innerText = num1 + " /";
        operador = "/";
        displayBottom.innerText = "0";
        esResultado = false;
    }
}

function resetear(){

    num1 = null;
    num2 = null;
    operador = null;
    displayBottom.innerText = "0";
    displayUpper.innerText = "";
}

function borrar(){

    if(displayBottom.innerText === "0" && displayUpper.innerText !== ""){

       displayBottom.innerText = displayUpper.innerText.slice(0,displayUpper.innerText.length - 2);
       displayUpper.innerText = "";
       operador = null;
       num1 = null;
    }
    else if(esResultado === true){
        num1 = null;
        num2 = null;
        operador = null;
        displayBottom.innerText = "0";
        displayUpper.innerText = "";
    }
    else{
        displayBottom.innerText = displayBottom.innerText.slice(0, displayBottom.innerText.length - 1);
        if(displayBottom.innerText === ""){
            displayBottom.innerText = "0";
        }
    }
    console.log(displayBottom.innerText)
}