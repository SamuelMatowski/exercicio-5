const prompt = require ("prompt-sync")()

function adicao(a, b){
    
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    return a / b;
}

const operacao = prompt("Digite a operação (+, -, *, /,): ");
const num1 = Number(prompt("Digite o primeiro número: "))
const num2 = Number(prompt("Digite o segundo número: "))

let resultado;

switch (operacao) {

    case "+":
        console.log(num1,num2);
        resultado = adicao (num1, num2);
        break;
    case "-":
        resultado = subtracao (num1, num2);
        break;
    case "*":
        resultado = multiplicacao(num1, num2)
        break;
    case "/":
         if (num2 === 0) {
            console.log ("Erro: divisão por zero não é permitida");
            break; 
         }
         resultado = divisao (num1, num2);
         break;
    default:
         console.log("Operação inválida!");
}
if (resultado !== undefined) {
    console.log(`Resultado: ${resultado}`);
}