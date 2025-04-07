/*
    NaN representa, 'not a number' é o valor retornado como resultado
    de uma operação arimética mal formada.
*/
console.log(5 * 'a'); // NaN

/*
    No caso abaixo o resultado é 25 pois o Js faz a conversão de forma
    implícita a string em número antes de efetuar a operação artimimética
*/
console.log(5 * '5'); // 25

/*
    O caso de operações mal formada é uma das ocorrências mais comuns de NaN
    no código, mas não é a única. Exitem cinco tipos de operações que podem
    retornar NaN

    1- Tentivas de converter para números valores que não podem ser convertidos,
    como parseInt('texto') ou Number(undefined). Os valores true e false podem 
    se convetidos para 1 e 0 unsando Number(), porém retornan NaN caso a tentativa
    de conversao seja feita com parseInt().
    
    2 - Operações matemáticas que não resultam em números reais, por exemplo Math.sqrt(-1).

    3 - Operações onde um dos valores é NaN ou pode ser convertido para NaN, 
        por exemplo 5 * ‘a’, 5 + NaN.

    4 - Formatos indeterminados como Infinity / Infinity, Infinity - Infinity. 
        O valor Infinity existe no JavaScript e você pode conferir mais sobre ele na documentação do MDN.

    5 - Outros casos onde um valor não pode ser representado como número.
*/

/*
    Como verificar se um valor é NaN?

    Você pode utilzar os métodos Number.isNaN() ou isNaN()
*/


console.log('//////// Number.isNaN() /////////')

const numero = 10;
const nome = 'Ana';

console.log(Number.isNaN(numero));  // false
console.log(Number.isNaN(nome));    // false
console.log(Number.isNaN(NaN));     // true

/*
    Observe que 'nome' não é avaliado como NaN nesse contexto. Porém, 
    observe este novo exemplo, utilizando isNaN() ao invés de Number.isNaN(0)
*/

console.log('//////// isNaN() /////////')

console.log(10);   // false
console.log(nome); // true
console.log(NaN);  // trur

/*
    A diferença é que Number.isNaN() irá retornar true apenas se o valor for efetivamente NaN,
    enquanto a função isNaN() irá retornar true inclusive para casos em que o valor pode ser
    avaliado como NaN se tentar ser convertido para número. Você pode utilizar um ou outro dependendo da sua necessidade.
*/