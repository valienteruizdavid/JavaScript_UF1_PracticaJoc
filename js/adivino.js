
let intentos = 0;
let max = 100;
let min = 0;
let n = 50;


window.onload = function(){
  document.getElementById("txt3").innerHTML="¡Hola! Piensa en un número y yo intentaré adivinarlo.";
  document.getElementById("txt4").innerHTML="Fácil: piensa en un número del 1 al 10.";
  document.getElementById("txt5").innerHTML="Medio: piensa en un número del 1 a 50.";
  document.getElementById("txt6").innerHTML="Difícil: piensa en un número del 1 al 100.";

}

function esmayor(){
  min = n;
  n = Math.floor((max+min)/2);
  document.getElementById("txt").innerHTML="Tu número es... "+n+"?";
  document.getElementById("txt2").innerHTML="";
  if(min == max){
    document.getElementById("txt").innerHTML="¡No intentes confundirme! No has hecho caso a mis indicaciones :(";
    document.getElementById("txt2").innerHTML="";
  }
  intentos++;
  console.log(max);
}

function esmenor(){
  max = n;
  n = Math.floor((max+min)/2)
  document.getElementById("txt").innerHTML="Tu número es... "+n+"?";
  document.getElementById("txt2").innerHTML="";
  if(min == max){
    document.getElementById("txt").innerHTML="¡No intentes confundirme! No has hecho caso a mis indicaciones :(";
    document.getElementById("txt2").innerHTML="";
  }
  intentos++;
  console.log(max);
}

function escorrecto(){
  document.getElementById("txt").innerHTML="¡¡He acertado!! Intentos: "+intentos;
  document.getElementById("txt2").innerHTML="";
}

function empezar(){
  document.getElementById("txt3").innerHTML="";
  document.getElementById("txt4").innerHTML="";
  document.getElementById("txt5").innerHTML="";
  document.getElementById("txt6").innerHTML="";
  document.getElementById("menor").style.display = "inline-block";
  document.getElementById("mayor").style.display = "inline-block";
  document.getElementById("correcto").style.display = "inline-block";
  document.getElementById("empezar").style.visibility = "hidden";
  document.getElementById("dificultades").style.visibility = "hidden";
  if(document.getElementById("easy").checked){
    max = 11;
    n = 5;
    document.getElementById("txt").innerHTML="Tu número es... "+n+"?";

  }else if(document.getElementById("medium").checked){
    max = 51;
    n = 25;
    document.getElementById("txt").innerHTML="Tu número es... "+n+"?";

  }else if(document.getElementById("hard").checked){
    max = 101;
    n = 50;
    document.getElementById("txt").innerHTML="Tu número es... "+n+"?";
  } else document.getElementById("txt").innerHTML="Tu número es... "+n+"?";
}
