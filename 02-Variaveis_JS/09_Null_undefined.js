/*
    Null: representa a ausência intencional de um valor.

    Undefined: quando um variável não está associoada a 
    um valor. Undefined é retornado em possíveis erros.

    Ambos são tipos primitivos
    - São tipos de dados primitivos
    - São atribuidos às variáveis por valor.

    Tipos de dados primitivos
    - String
    - Number
    - Boolean
    - Null
    - Undefined
    - Symbol

    * * * Diferença entre eles  * * * 

    NULL
    - null é um valor de atribuição. Pode ser atribuido a uma varável 
    como uma representação de nenhum valor, ou seja, está definida 
    explicitamente com um valor vazio.

    ////// const usuario = null; ////// null

    - A variável usuario é conhecida e existe, mas não aponta para 
    nenhum tipo ou valor.

    UNDEFINED
    - Undefined vai aparecer quando iniciarmos uma variável e não indicarmos
    um valor para ela.

    ////// const usuario; ////// 
    ////// console.log(usuario); ///// undefined

    - Vai retornar um valor no console o valor undefined, pois declaramos
    a variável e não setamos o valor.
*/

let nomeEstuante;
const professora = 'Ana';

console.log(nomeEstuante); // undefined
console.log(typeof nomeEstuante); // tipo undefined
console.log(typeof professora); // string

let telefoneEstudante = null;

console.log(telefoneEstudante + 3); // 3
console.log(nomeEstuante + 3); // NaN
console.log(typeof telefoneEstudante); // Object 


