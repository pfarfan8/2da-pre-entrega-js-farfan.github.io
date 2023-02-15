alert ("Bienvenidos al juego Piedra Papel o Tijera");
let contador1 = 0;
let contador2 = 0;
let empate = 0;
let puntos = 130;
function sumar (ValorA , ValorB , ValorC){
  return ValorA + ValorB + ValorC;
}
let ArrayJugadores = ["1.  Juan", "2.  Pedro", "3.  Enrique"];


let juego = prompt ("Elija cantidad de jugadores 1 o 2");
//iniciamos elegiendo si jugamos de 1 o de a 2
while (juego > 3 || juego == isNaN || juego < 0 || juego == null){
  juego = prompt ("Opcion incorrecta, elija 1 o 2 jugadores");
  }
//juego de a 2

if( juego == 2){
  alert ("Decidiste jugar de a 2")
  let jugador1 = prompt ("Ingrese nombre de jugador 1");
  '${jugador1}'
  let jugador2 = prompt ("Ingrese nombre de jugador 2");
  '${jugador2}'
  alert ("El que gana 3 veces es el ganador")
  
  while (contador1 != 3 && contador2 != 3){
    

    let mano1 = prompt(jugador1 + " Ingresa tu mano");
    '${mano1}'
    
    while (mano1 != "piedra" && mano1 != "papel" && mano1 != "tijera" ){
      juego = prompt ("Opcion incorrecta, elija PIEDRA, PAPEL o TIJERA");
      }

    let mano2 = prompt(jugador2 + " Ingresa tu mano");
    '${mano2}'
    while (mano2 != "piedra" && mano2 != "papel" && mano2 != "tijera" ){
      juego = prompt ("Opcion incorrecta, elija PIEDRA, PAPEL o TIJERA");
      }

      if (mano1 == "piedra" && mano2 == "papel"){
        alert ("Esta mano fue ganada por " + jugador2);
        contador2 = contador2 +1;
      }else if (mano1 == "piedra" && mano2 =="tijera" ){
        alert ("Esta mano fue ganada por " + jugador1);
        contador1 = contador1 + 1;
      }else if (mano1 == "piedra" && mano2 == "piedra"){
        alert ("Esta mano fue empatada");
        empate = empate + 1;
      }else if (mano1 == "papel" && mano2 == "tijera"){
        alert ("Esta mano fue ganada por " + jugador2);
        contador2 = contador2 +1;
      }else if (mano1 == "papel" && mano2 == "piedra"){
        alert ("Esta mano fue ganada por " + jugador1);
        contador1 = contador1 + 1;
      }else if(mano1 == "papel" && mano2 == "papel"){
        alert ("Esta mano fue empatada");
        empate = empate + 1;
      }else if(mano1 == "tijera" && mano2 == "piedra"){
        alert ("Esta mano fue ganada por " + jugador2);
        contador2 = contador2 +1;
      }else if(mano1 == "tijera" && mano2 == "papel"){
        alert ("Esta mano fue ganada por " + jugador1);
        contador1 = contador1 + 1;
      }else if (mano1 == "tijera" && mano2 == "tijera"){
        alert ("Esta mano fue empatada")
        empate = empate + 1;
      }

      }
      if (contador1 == 3){
        alert ("El ganador es " + jugador1);
        alert ("cantidad de manos jugadas en total: " + sumar(contador1, contador2, empate));
        
      }else if  (contador2 == 3){
        alert ("El ganador es " + jugador2);
        alert ("cantidad de manos jugadas en total: " + sumar(contador1, contador2, empate));
       
      }else{
        alert("sigue el juego");
      }
  //juego con la maquina
}else{
  alert ("Decidiste jugar solo");
   
  let jugador1 = prompt ("Ingrese nombre del jugador")
  '${jugador1}'

   alert ("1 = PIEDRA , 2 = PAPEL , 3 = TIJERA")

    while (contador1 !=3 && contador2 !=3){

      puntos = puntos - 10; // descontamos 10 puntos por ronda, la puntuacion maxima sera de 100, ganando 3 manos seguidas
        let jugada = prompt ("Ingrese jugada 1, 2 o 3")
        '${jugada}'

        while (jugada > 3 || jugada == isNaN || jugada < 0 || jugada == null){
        jugada = prompt ("Ingrese jugada solo esta permitidido 1, 2 o 3")
        }
        let maquina = Math.floor(Math.random()*3)+1;
        '${maquina}'
        alert (maquina);
 
      if (jugada == 1 && maquina == 2){
        alert ("Esta mano fue ganada por la maquina");
        contador2 = contador2 + 1;
      }else if (jugada == 1 && maquina == 3 ){
        alert ("Esta mano fue ganada por " + jugador1);
        contador1 = contador1 + 1;
      }else if (jugada == 1 && maquina == 1){
        alert ("Esta mano fue empatada");
        empate = empate + 1;
      }else if (jugada == 2 && maquina == 3){
        alert ("Esta mano fue ganada por la maquina");
        contador2 = contador2 + 1;
      }else if (jugada == 2 && maquina == 1){
        alert ("Esta mano fue ganada por " + jugador1);
        contador1 = contador1 + 1;
      }else if(jugada == 2 && maquina == 2){
        alert ("Esta mano fue empatada");
        empate = empate + 1;
      }else if(jugada == 3 && maquina == 1){
        alert ("Esta mano fue ganada por la maquina");
        contador2 = contador2 + 1;
      }else if(jugada == 3 && maquina == 2){
        alert ("Esta mano fue ganada por " + jugador1);
        contador1 = contador1 + 1;
      }else if (jugada == 3 && maquina == 3){
        alert ("Esta mano fue empatada")
        empate = empate + 1;
      }
   }
  if (contador1 == 3){
    alert ("el ganador es " + jugador1);
    alert ("genero " + puntos + " puntos contra la maquina");
    alert ("los records historicos del juego fueron para: " + ArrayJugadores); //queda pendiente hacer un historial real con los jugadores
    ArrayJugadores.push(jugador1);
    alert ("fuiste agregado en el ultimo lugar, suerte para la proxima " + ArrayJugadores);
    
  }else if (contador2 == 3){
    alert ("ganador la maquina");
    alert ("cantidad de manos jugadas en total: " + sumar(contador1, contador2, empate));
  }else{
    alert ("siga");
  }
}
