// Criando um símbolo
const meuSimbolo = Symbol();

// Símbolos podem receber uma descrição
const simboloComDescricao = Symbol('descricao_do_simbolo');

// Símbolos são únicos 
const outroSimbolo = Symbol();
console.log(meuSimbolo === outroSimbolo); // false

// Simbolos podem ser usados como chaves de propriedades de objetos
const obj = {
    [meuSimbolo]: 'valor_do_simbolo'
};

// Acessando a propriedade usando o símbolo como chave
console.log(obj[meuSimbolo]); // Saída: 'valor_do_simbolo'

/*
    Dado que os símbolos são únicos, mesmo quando criados com a mesma descrição,
    tornam-se ideais para a criação de chaves de propriedades de objetos. 
    Essa característica evita conflitos com outras chaves, prevenindo a 
    sobrescrita acidental de propriedades.

    Além disso, símbolos também podem ser usados para adicionar propriedades 
    "escondidas" em objetos, tornando-as inacessíveis sem a referência direta 
    ao símbolo correspondente. Essa prática é particularmente útil em 
    bibliotecas ou frameworks, contribuindo para evitar colisões de nomes de propriedades.
*/