function calcularMontante() {
  const C = parseFloat(document.getElementById('capital').value);
  const taxaPercentual = parseFloat(document.getElementById('taxa').value);
  const t = parseFloat(document.getElementById('tempo').value);

  if (isNaN(C) || isNaN(taxaPercentual) || isNaN(t) || C < 0 || t < 0) {
    document.getElementById('resultado').innerText = 'Preencha os campos corretamente.';
    return;
  }

  // Converte a taxa de porcentagem para valor decimal (ex: 5% vira 0.05)
  const i = taxaPercentual / 100;

  // Fórmula de Juros Compostos: M = C * (1 + i)^t
  const M = C * Math.pow(1 + i, t);

  document.getElementById('resultado').innerText = `Montante (M): R$ ${M.toFixed(2)}`;
}
