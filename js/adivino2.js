
let intentos = 0;
let easy = Math.floor(Math.random() * 10) + 1;
let medium = Math.floor(Math.random() * 50) + 1;
let hard = Math.floor(Math.random() * 100) + 1;



function facil(){
  let num = document.getElementById("num").value;
  let p = 3;

  if(num<=0){
    document.getElementById("txt").innerHTML="¡Vaya! No puedes introducir ese número.";
    document.getElementById("pista").innerHTML="";
  }
  else if(num > 10){
    document.getElementById("txt").innerHTML="Es un número demasiado grande.";
    document.getElementById("pista").innerHTML="";
  }
    else if(num<easy){
      document.getElementById("txt").innerHTML="Más grande.";
      document.getElementById("pista").innerHTML="El número está entre "+parseInt(easy+p)+
      " y entre "+parseInt(easy-p);
      intentos ++;
    }
    else if(num>easy){
      document.getElementById("txt").innerHTML="Más pequeño.";
      intentos++
    }
    else if(num == easy){
      document.getElementById("txt").innerHTML="¡¡Has ganado!! Intentos: "+intentos;
    }

    p--
    console.log(easy);
}

function medio(){
  let num = document.getElementById("num").value;

    if(num<=0){
      document.getElementById("txt").innerHTML="¡Vaya! No puedes introducir ese número.";
    }
    else if(num > 50){
      document.getElementById("txt").innerHTML="Es un número demasiado grande.";
    }
    else if(num<medium){
      document.getElementById("txt").innerHTML="Más grande.";
      intentos ++;
    }
    else if(num>medium){
      document.getElementById("txt").innerHTML="Más pequeño.";
      intentos++
    }
    else if(num == medium){
      document.getElementById("txt").innerHTML="¡¡Has ganado!! Intentos: "+intentos;
    }

    console.log(medium);
}

function dificil(){
  let num = document.getElementById("num").value;

    if(num<=0){
      document.getElementById("txt").innerHTML="¡Vaya! No puedes introducir ese número.";
    }
    else if(num > 100){
      document.getElementById("txt").innerHTML="Es un número demasiado grande.";
    }
    else if(num<hard){
      document.getElementById("txt").innerHTML="Más grande.";
      intentos ++;
    }
    else if(num>hard){
      document.getElementById("txt").innerHTML="Más pequeño.";
      intentos++
    }
    else if(num == hard){
      document.getElementById("txt").innerHTML="¡¡Has ganado!! Intentos: "+intentos;
    }

    console.log(hard);
}
