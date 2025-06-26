function enter() {
  document.querySelector('.splash-screen').classList.add('hidden');
  document.querySelector('.main').classList.remove('hidden');
}

function showContent(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function evaluar() {
  const objetivo = document.getElementById("objetivo").value.trim();
  const metodo = document.getElementById("metodologia").value.trim();
  const resultado = document.getElementById("resultado");

  if (!objetivo || !metodo) {
    resultado.innerText = "Completa todos los campos para evaluar tu protocolo.";
  } else {
    resultado.innerText = "✅ Tu protocolo tiene coherencia básica. Puedes desarrollarlo más detalladamente.";
  }
}
