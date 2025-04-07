const valor = 50;

//Op. ternário  condição ?     caso 'true'           caso 'false'
const texto = valor < 50 ? 'valor insuficiente' : 'valor suficiente';
console.log(texto); // retorna 'valor suficiente';

////////////////////////////////////

let matriculaAtiva = true;

function verificaMatriculaAtiva() {
    return matriculaAtiva ? 'matrícula ativa no sistama' : 'matrícula não está ativa';
}
// Retona 'matrícula ativa no sistema;
console.log(verificaMatriculaAtiva());

////////////////////////////////////

let idadeEstudante = 16;
const precisaDeAutoriacao = idadeEstudante < 18 ? true : false;
console.log(precisaDeAutoriacao); // true