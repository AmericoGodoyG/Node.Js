/*
    [Escopo]
    - um contexto de execução onde os valores e as expressões podem
    ser acessados ou referenciados.

    JavaScript trabalha com 3 escopos
    - Global
    - Bloco
    - Função
*/

/* 
    [Escopo global]
    - Qualquer variável que esteja no escopo global pode ser acessada
       por outras partes do programa. Uma variável é considerada global quando
       não é declarada dentro de nunhuma função ou bloco

const nome = 'Camila'; // Variavel global
var sobreNome = 'Souza'
let idade = 25;

function cumprimentar() {
    console.log(`Olá, ${nome} ${sobreNome}!`); // Acessa a var global
    console.log(`Idade. ${idade}`);
}

cumprimentar(); // 'Olá, Camila'
*/

/*
    [Escopo de bloco]
    - Variáveis declaradas dentro de chaves {}, como no caso de if, for, while etc.
        Não ficam acessíveis para o código que esteja fora, Chamamos o código dentro 
        das {} de blobo.



if (1 > 0) {
    let nome = 'Ana';
    console.log(nome); // Ana
}

// Variável `nome` não acessível
console.log(nome); // Erro: nome is not defined */

/*
    [IMPORTANTE]
    - Variáveis declaradas com var não seguem a regra do escopo de bloco!
    - Elas serão consideradas globais e poderão ser acessadas de fora do bloco

    A falta de 'controle' de escopo é um dos motivos pelo qual o uso de 'var' 
    foi abandonado e as boas práticas recomendao apenas o uso de 'const' e 'let'


if (1 > 0) {
    var nome = 'Ana';
    console.log(nome); // 'Ana'
}
console.log(nome); // 'Ana' */

/*
    [Escopo de função]
    - Variáveis declaradas dentro de uma função são consideradas 'locais'
    (ou seja, o oposto de 'globais') e não pode ser acessadas por código que
    esteja fora do bloco da função.


function cumprimentar() {
    const nome = 'Camile'; // Variável local
    const cumprimento = 'Olá' // Variável local
    console.log(`${cumprimento}, ${nome}!`); // 'Olá, Camila'
}

// As variáveis não podem ser acessadas de fora da função
console.log(`${cumprimento}, ${nome}`); // erro: 'cumprimento is not defined' */
