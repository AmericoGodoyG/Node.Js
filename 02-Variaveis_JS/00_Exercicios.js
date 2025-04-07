/* 
// [Exercicio - 01]

let nomeOne = 'Américo';
let idade = 25;
let altura = 1.82;

console.log(`Nome: ${nomeOne}, idade: ${idade}, altura ${altura}`);

//[Exercicios - 02]

let nome = 'Américo';
let sobreNome = 'Godoy da Silva';

// Usando o operador +
let nomeCompletoConcatenado = nome + ' ' + sobreNome;
console.log('Usando o operaddor +: ', nomeCompletoConcatenado);

// Usando o template string
const nomeCompletoTemplate = `${nome} ${sobreNome} `;
console.log(`Usando template strings: ${nomeCompletoTemplate}`);


//[Exercicios - 03]

let age = 25;
let greetings = "Hi! Im Américo";

console.log(`${greetings} and Im ${age} years old!`);


//[Exercicio - 04]

let horas = "15:51";
console.log(horas);

horas = "15:52";
console.log(horas);


//[Exercício - 05]

var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora);   // Retorna 'Fora do bloco'
    console.log(dentro); // Retorna ' Dentro do bloco'
}

console.log(fora);   // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

/////////////////////////

let fora = 'Fora do bloco';

if (true) {
    let dentro = 'Dentro do bloco';
    console.log(fora);  // retorna: 'Fora do bloco'
    console.log(dentro); // retorna: 'dentro do bloco
}

console.log(fora); // retorna: 'Fora do bloco'
console.log(dentro); // erro: 'dentro is not defined'


//[Exercício - 06]

let raining = true;

if (!raining) {
    console.log('Não é necessário guarda chuvas');
} else {
    console.log('É necessáio guarda chuva');
}


// [Exercício - 07]
let frase = 'Hello, JavaScript';
console.log(frase.length);
console.log(frase.toLocaleUpperCase());

// [Exercício - 08]
let a = null;
let b;

console.log(a); // Saída: null
console.log(b); // Saída: undefined

// [Exercício - 09]
let nomeUm = 'Américo';
let idade = 25;
let faculdade = true;

console.log(`Nome: ${nomeUm}, idade: ${idade}, Ensino Superior: ${faculdade}`);

//  [Exercício - 10]
let numerico = 10;
let str = 'Americo';

let numeroConvertido = String(numerico);
let textoConvertido = Number(str);

console.log('Tipo de dado após conversão de número para string: ', typeof numeroConvertido);
console.log('Tipo de dado após conversão de string para número: ', typeof textoConvertido);*/

// [Exercício - 11]
let alterandoTexto = 'Olá, meu nome é Américo!';

// Exibe o tamanho do texto
console.log(alterandoTexto.length);

// Exibindo um trecho presente no texto
console.log(alterandoTexto.includes('Américo'));

// Extraindo 'meu nome é' do texto [5 - 15)
console.log(alterandoTexto.slice(5, 15));

// Extraindo o nome 'Américo';
let nomeUser = alterandoTexto.slice(16, 23);
console.log(nomeUser.toUpperCase());
console.log(nomeUser.toLocaleLowerCase());
