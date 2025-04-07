const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "nosso lema é 'estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

// Concatenação
console.log('A estudante chama: ' + estudante);

//Interpolação (template string)
console.log(`Nome do professor(a) ${docente}`);

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);