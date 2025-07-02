let anoNascimento = 2008;
let anoAtual = 2025;

let idade = anoAtual - anoNascimento;

// idade = 2025 - 2010 = 15

if (idade > 18) {
  console.log('Você é maior de idade, 😋', idade);
} else {
  console.log('Você é menor de idade 🤦‍♂️,', idade);
}

// constante um valor constante que não muda o mesmo até o devido momento, um dado que não pode ser varido

const temperatura = 12;

const quente = 'Está quente o clima!';
const agradavel = 'O clima  está agradável';
const frio = 'Está muito frio o clima!';

if (temperatura > 29) {
  console.log(quente);
} else if (temperatura >= 20) {
  console.log(agradavel);
} else{
  console.log(frio);
}
