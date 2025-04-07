const aprovado = true;

/*
    === compara o valor e o tipo do dado.
*/
if (aprovado === true) {
    console.log('Aprovado');
}

if ('0' == 0) { // true
    console.log('passou na comparação');
} else {
    console.log('não passou na comparação');
}

if ('0' === 0) { // false
    console.log('passou na comparação');
} else {
    console.log('não passou na comparação');
}

