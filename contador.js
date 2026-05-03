// 1. CONFIGURA LA FECHA DEL EVENTO AQUÍ
// Formato: "Mes Día, Año Horas:Minutos:Segundos"
const fechaEvento = new Date("Dec 31, 2026 21:00:00").getTime();

const contador = setInterval(function() {

  // Obtener fecha de hoy
  const ahora = new Date().getTime();

  // Distancia entre las fechas
  const distancia = fechaEvento - ahora;

  // Cálculos de tiempo
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Inyectar los números en el HTML
  document.getElementById("days").innerText = dias.toString().padStart(2, '0');
  document.getElementById("hours").innerText = horas.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutos.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = segundos.toString().padStart(2, '0');

  // Si el contador termina
  if (distancia < 0) {
    clearInterval(contador);
    document.getElementById("countdown-container").innerHTML = "¡Es hoy!";
  }
}, 1000);