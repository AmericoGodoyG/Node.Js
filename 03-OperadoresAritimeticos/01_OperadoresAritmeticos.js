
const notaPrimeirroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = Number.parseInt('5');

let media = (notaPrimeirroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
    media += 0.7;
}

console.log(`$ a média é: ${media.toFixed(2)}`);