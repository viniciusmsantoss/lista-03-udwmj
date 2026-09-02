function calcularArea() {
  const raio = parseFloat(document.getElementById('raio').value);
  
  if (isNaN(raio) || raio <= 0) {
    document.getElementById('resultado').innerText = 'Por favor, digite um valor válido.';
    return;
  }

  const area = Math.PI * Math.pow(raio, 2);
  document.getElementById('resultado').innerText = `Área: ${area.toFixed(2)}`;
}
