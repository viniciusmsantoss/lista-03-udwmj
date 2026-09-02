function calcularVolume() {
  const raio = parseFloat(document.getElementById('raio').value);
  
  if (isNaN(raio) || raio <= 0) {
    document.getElementById('resultado').innerText = 'Por favor, digite um valor válido.';
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
  document.getElementById('resultado').innerText = `Volume: ${volume.toFixed(2)}`;
}
