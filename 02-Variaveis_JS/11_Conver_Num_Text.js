/*
    Conversão de para números
    - Esta função converte qualquer tipo de dado em um tipo Number.
      Caso o valor não possa ser convertido, retornará NaN
    
      Number();

*/
console.log('//// Number() ////');

console.log(Number('1')); // Saída: 1
console.log(Number('Alura')); // Saída: NaN
console.log(Number(undefined)); // Saída: NaN
console.log(Number(null)); // Saída: 0
console.log(Number(true)); // Saída: 1
console.log(Number(false)); // Saída 0

// null == 0 ? console.log('null == 0') : console.log('null != 0');

/*
    Numeber.parseInt() e Number.parseFloat()
    
    parseInt() - tenta converter um valor em um número inteiro
    parseFloat() - tenta converter em um número de ponto flutuante
*/

console.log('//// parseInt() ////');
console.log('Convertendo string para inteiro');

console.log(parseInt('4')); // Saída: 4
console.log(parseInt('4.5')); // Saída: 4



console.log('//// parseFlot() ////');
console.log('Convertendo string para float');


console.log(parseFloat('4')); // Saída: 4
console.log(parseFloat('4.5')); // Saída 4.5
console.log(parseFloat('4.5abc')); // Saída: 4.5

console.log('//// Conversão para strings ////');
// string() - converte outros tipos de dados em formato de texto

console.log(String(2)); // Saída: 2
console.log(String(undefined)); // Saída: undefined
console.log(String(true));

/*
    Métodos string

    includes() - Determina se um conjunto de caracteres pode ser
    encontrado dentro de uma string, retorna true ou false
*/

let texto = 'estudando JavaScipt';
console.log(texto.includes('Java')); // Saída: true

// toLowerCase(): Converte todos os caracteres da string para letras minúsculas

let textoDois = 'POR FAVOR, NÃO GRITE';
console.log(textoDois.toLocaleLowerCase()); // Saída: 'por favor, não grite';
console.log(textoDois.toLocaleUpperCase()); // Saída: 'POR FAVOR, NÃO GRITE;