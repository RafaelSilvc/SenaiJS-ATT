// Alternar tema
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// Executar exercício selecionado
document.getElementById("runBtn").addEventListener("click", () => {
  const ex = parseInt(document.getElementById("exSelect").value);
  executarExercicio(ex);
  document.getElementById("status").innerText = `✅ Exercício ${ex} executado!`;
});

// Funções de cada exercício
function executarExercicio(n) {
  switch(n) {
    case 1:
      let a = Number(prompt("Digite o primeiro número:"));
      let b = Number(prompt("Digite o segundo número:"));
      alert("A soma é: " + (a + b));
      break;
    case 2:
      let nome = prompt("Digite seu nome:");
      let sobrenome = prompt("Digite seu sobrenome:");
      alert("Olá, " + nome + " " + sobrenome);
      break;
    case 3:
      let reais = Number(prompt("Valor em reais:"));
      alert("Em dólares: $" + (reais / 5.25).toFixed(2));
      break;
    case 4:
      let num = Number(prompt("Número inteiro:"));
      alert("Antecessor: " + (num - 1) + ", Sucessor: " + (num + 1));
      break;
    case 5:
      let largura = Number(prompt("Largura (m):"));
      let comprimento = Number(prompt("Comprimento (m):"));
      let preco = Number(prompt("Valor por m²:"));
      let area = largura * comprimento;
      alert(`Área: ${area}m², Valor: R$${(area * preco).toFixed(2)}`);
      break;
    case 6:
      let km = Number(prompt("Distância (km):"));
      let litros = Number(prompt("Combustível (litros):"));
      alert("Consumo médio: " + (km / litros).toFixed(2) + " km/l");
      break;
    case 7:
      let notas = [];
      for (let i = 1; i <= 4; i++) {
        notas.push(Number(prompt(`Nota ${i}:`)));
      }
      let media = notas.reduce((soma, n) => soma + n, 0) / 4;
      alert("Média: " + media.toFixed(2));
      break;
    case 8:
      let f = Number(prompt("Temperatura em Fahrenheit:"));
      let c = (f - 32) * 5 / 9;
      alert("Celsius: " + c.toFixed(2) + "°C");
      break;
    default:
      alert("Exercício inválido!");
  }
}
