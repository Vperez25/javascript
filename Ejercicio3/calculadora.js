var result, esResultado = false, esResultadoError = false;
var displayUpper = document.getElementById("display-upper");
var displayBottom = document.getElementById("display-bottom");
var historial = document.getElementById("historial")


function resultado(){

    if(!esResultado){
        displayUpper.innerText += " =";

        result = eval(displayUpper.innerText.slice(0, -1));
        esResultado = true;

        if(result === Infinity){
            esResultadoError = true;
        }

        displayBottom.innerText = result;

        agregarHistorial();
    }

}

function agregarHistorial(){
    var historialPara = document.createElement("p");


    if(historial.childElementCount > 7){
        historial.lastChild.remove();
    }
    if(esResultadoError){
        historialPara.textContent = "Error: No se puede dividir entre 0";
        esResultadoError = false;
    }
    else{
        historialPara.textContent = displayUpper.innerText + displayBottom.innerText;
    }
    historial.prepend(historialPara);
}
function add0() {
    if(esResultado){
        esResultado = false;
        displayUpper.innerText = "";
        displayBottom.innerText = "";
    }
    if(displayUpper.innerText.length < 16) {

        if(displayUpper.innerText !== "0") {
            displayUpper.innerText += "0";
        }
    }
}

function add1() {
    if(esResultado){
        esResultado = false;
        displayUpper.innerText = "";
        displayBottom.innerText = "";
    }
    if(displayUpper.innerText.length < 16) {

        if(displayUpper.innerText !== "0") {
            displayUpper.innerText += "1";
        } else {
            displayUpper.innerText = "1";
        }
    }
}

function add2() {
    if(esResultado){
        esResultado = false;
        displayUpper.innerText = "";
        displayBottom.innerText = "";
    }
    if(displayUpper.innerText.length < 16) {

        if(displayUpper.innerText !== "0") {
            displayUpper.innerText += "2";
        } else {
            displayUpper.innerText = "2";
        }
    }
}

function add3() {
    if(esResultado){
        esResultado = false;
        displayUpper.innerText = "";
        displayBottom.innerText = "";
    }
    if(displayUpper.innerText.length < 16) {

        if(displayUpper.innerText !== "0") {
            displayUpper.innerText += "3";
        } else {
            displayUpper.innerText = "3";
        }
    }
}

function add4() {
    if(esResultado){
        esResultado = false;
        displayUpper.innerText = "";
        displayBottom.innerText = "";
    }
    if(displayUpper.innerText.length < 16) {

        if(displayUpper.innerText !== "0") {
            displayUpper.innerText += "4";
        } else {
            displayUpper.innerText = "4";
        }
    }
}

function add5() {
    if(esResultado){
        esResultado = false;
        displayUpper.innerText = "";
        displayBottom.innerText = "";
    }
    if(displayUpper.innerText.length < 16) {

        if(displayUpper.innerText !== "0") {
            displayUpper.innerText += "5";
        } else {
            displayUpper.innerText = "5";
        }
    }
}

function add6() {
    if(esResultado){
        esResultado = false;
        displayUpper.innerText = "";
        displayBottom.innerText = "";
    }
    if(displayUpper.innerText.length < 16) {

        if(displayUpper.innerText !== "0") {
            displayUpper.innerText += "6";
        } else {
            displayUpper.innerText = "6";
        }
    }
}

function add7() {
    if(esResultado){
        esResultado = false;
        displayUpper.innerText = "";
        displayBottom.innerText = "";
    }
    if(displayUpper.innerText.length < 16) {

        if(displayUpper.innerText !== "0") {
            displayUpper.innerText += "7";
        } else {
            displayUpper.innerText = "7";
        }
    }
}

function add8() {
    if(esResultado){
        esResultado = false;
        displayUpper.innerText = "";
        displayBottom.innerText = "";
    }
    if(displayUpper.innerText.length < 16) {

        if(displayUpper.innerText !== "0") {
            displayUpper.innerText += "8";
        } else {
            displayUpper.innerText = "8";
        }
    }
}

function add9() {
    if(esResultado){
        esResultado = false;
        displayUpper.innerText = "";
        displayBottom.innerText = "";
    }
    if(displayUpper.innerText.length < 16) {

        if(displayUpper.innerText !== "0") {
            displayUpper.innerText += "9";
        } else {
            displayUpper.innerText = "9";
        }
    }
}

function suma() {

   if(result !== Infinity){
       if(esResultado){
           displayUpper.innerText = displayUpper.innerText.slice(0, -1)
           esResultado = false;
       }
       displayUpper.innerText += " + ";
   }

}

function resta() {
    if(result !== Infinity){
        if(esResultado){
            displayUpper.innerText = displayUpper.innerText.slice(0, -1)
            esResultado = false;
        }
        displayUpper.innerText += " - ";
    }

}

function multiplicacion() {
    if(result !== Infinity){
        if(esResultado){
            displayUpper.innerText = displayUpper.innerText.slice(0, -1)
            esResultado = false;
        }
        displayUpper.innerText += " * ";
    }

}

function division() {
    if(result !== Infinity){
        if(esResultado){
            displayUpper.innerText = displayUpper.innerText.slice(0, -1)
            esResultado = false;
        }
        displayUpper.innerText +=  " / ";
    }
}

function resetear(){

    displayUpper.innerText = "";
    displayBottom.innerText = "";
}

function borrar(){

    if(displayUpper.innerText !== ""){

       displayUpper.innerText = displayUpper.innerText.slice(0,displayUpper.innerText.length - 1);

    }
    else if(esResultado === true){

        displayBottom.innerText = "";
        displayUpper.innerText = "";
    }

}

function borrarHistorial(){

    historial.innerHTML = "";
}

