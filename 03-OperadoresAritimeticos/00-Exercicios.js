
[Exercicio 01]
let saldo = 1000;

exibirSaldo(saldo);
depositar(500);
sacarDinheiro(850);

function exibirSaldo(saldo) {
    console.log(`Saldo disponível: R$${saldo}`);
}

function depositar(valorDeposito) {
    saldo += valorDeposito;
    console.log(`Depositado R$${valorDeposito.toFixed(2)}`);
    console.log(`Saldo atualizado: R$ ${saldo.toFixed(2)}`);
}

function sacarDinheiro(valorSaque) {
    if (saldo > 0 && valorSaque <= saldo) {
        saldo -= valorSaque;
        console.log(`Valor de R$${valorSaque.toFixed(2)} retirado com sucesso!`);
        exibirSaldo(saldo.toFixed(2));
    } else {
        console.log(`Saldo insufuciente: R$${saldo.toFixed(2)}`);
    }
}

[Exercicio 02]
let valor = 10;
const tipo = valor % 2 === 0 ? 'par' : 'impar';
console.log(tipo);


[Exercicio 03]
const user = {
    logado: false,
    permissionAdm: true,
}

const msg = user.logado === true || user.permissionAdm === true ? 'online' : 'offline';
console.log(msg);

[Exercicio 04]
let a = false;
let b = false;

const msgBoolean = a === true || b === true ? 'Pelo menos uma é true':'Ambas são falsas';
console.log(msgBoolean);

[Exercicio 05]
let userAge = 17;
let minAge = 18;

let ticketMsg = minAge <= userAge ? 'Success!' : 'Purchese not permitted.';
console.log(ticketMsg);
