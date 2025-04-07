/*
  Coerção de tipos em JavaScript
  - refere-se à conversão automática e implícita 
    de um tipo de dado para outro durante operações. 

  - Pode acontecer em operações matemáticas, comparações
    ou concatenações de strings
*/

// [Exemplo de coerção de tipos]:
let valorString = '10';
let valorNumero = 5;

/*
  Neste exemplo, a operação de adição entre uma string
  e um número resultou em uma concatenação de strings, 
  pois o JavaScript coage (converte) o número para uma 
  string para realizar a operação.
*/
let resultado = valorString + valorNumero;

// Saída: '105' (O número 5 foi convertido para string e concatenado com a string '10') 
console.log(resultado);

// Saída: string
console.log(typeof resultado);


console.log('//////////////////////////////');
/*
  Conversão de Tipos em JavaScript
  - É a transformação explícita de um tipo de dados em outro.
  - Pode ser feita utilizando funções ou operadores específicos 
    para converter um tipo em outro
*/

// [Exemplo de conversão de tipos]:
let numString = '20';
let numConvertido = parseInt(numString);

console.log(numConvertido);
console.log(typeof numConvertido);