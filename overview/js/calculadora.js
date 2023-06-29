function calculator(){
    const formData = new FormData(document.querySelector("form"))
    let n1 = parseInt(formData.get('n1'))
    let n2 = parseInt(formData.get('n2'))
    let n3 = parseInt(formData.get('operador'))

    

    switch (n3) {
        case 1:
          console.log(n1 + n2);
          break;
        case 2:
          console.log(n1 - n2);
          break;
        case 3:
          console.log(n1 * n2);
          break;
        case 4:
          console.log(n1 / n2);
          break;
        default:
          console.error("error");
      }

}
// Desafio 1: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.
let vetorr = [2,4,5,6,3]
const objectVetor = {
    n1:vetorr[0],
    n2:vetorr[1],
    n3:vetorr[2],
    n4:vetorr[3],
    n5:vetorr[4],
}


const { n1, n2, n3, n4, n5 } = objectVetor;
const jsonCert0 = { primeiro: n1, segundo: n2, terceiro: n3, quarto: n4, quinto: n5 };
const jsonCorreto = JSON.stringify(jsonCert0);


// Desafio 2: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.
const vat1 = 10, vat2 = 15 
const objectCalculadora = { 
    soma: vat1 + vat2,
    sub: vat1 - vat2,
    mul: vat1 * vat2,
    divi: vat1 / vat2,
}

const jsonCal = JSON.stringify(objectCalculadora)