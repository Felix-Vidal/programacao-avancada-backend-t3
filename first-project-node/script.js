// setTimeout(() => { console.log('esperando 5 segundos para aparecer...') } , 5000)

// console.log('quando isso aparece?')

/*
Desafio: utilize a classe nativa Date para, dentro de uma função, exibir via console uma string com o dia, mês e ano atual. Em outras palavras: crie uma função sem parâmetros, crie um objeto do tipo Date dentro dela e utilize os métodos getHours, getMinutes e getSeconds para montar uma string com a hora, minuto e segundo. Após a função, acrescente o código setTimeout(nomeDaFuncao, 5000) três vezes. Teste com o comando node ./nomedoarquivo.js via terminal. Perguntas retóricas: o que acontece? Qual o motivo disso acontecer?

Agora, utilize o método setInterval apenas uma vez no lugar de setTimeout e responda às mesmas perguntas.
*/

// const fs = require('fs');
// console.log('Primeira saida');
// fs.readFile('./text.txt', callback);

// function callback(err, conteudo){
//     if(err) return console.error(err);
//     console.log(String(conteudo));

// }
// console.log('Segunda saida');
// console.log('Terceira saida');

// function soma(callback, callbackErro){
//     const resultado = 1 + 1;
//     if(resultado === 2) callback();
//     else callbackErro();
// }
// soma(() => {console.log('Sucesso! A soma é 2.')}, () => {console.log('Erro! A soma não deu 2.')})

const p = new Promise((resolve, reject) => {
    const resultado = 1 + 1;
    if(resultado === 2) resolve('Sucesso! A soma é 2.');
    else reject('Erro! A soma não deu 2.');
});

p
.then((mensagem) => { 
    console.log(mensagem)
})
.catch((mensagem) => {
    console.log(mensagem) 
});

const melhorProgramador = 'João Feli';

// function oMelhor(callback,callbackErro){
//     if (melhorProgramador == "João Felix"){
//         callback({
//             nome: melhorProgramador,
//             mensagem: 'humildemente o melhor!'
//         });
//     }else {
//         callbackErro({
//             mensagem01: "Tá errado...",
//             mensagem02: melhorProgramador+', serio? '
//         });

//     }
// }

// oMelhor((objeto) => {
//     console.log(objeto.nome +' é ' + objeto.mensagem);
// }, 
// (objeto)=>{
//     console.log(objeto.mensagem02 + objeto.mensagem02);
// })

p2 = new Promise((resolve, reject) => {
    if(melhorProgramador == "João Felix") resolve({
        nome: melhorProgramador,
        mensagem: 'humildemente o melhor!'
    });
    else reject({
        mensagem01: "Tá errado...",
        mensagem02: melhorProgramador+', serio? '
    });
});

p2
.then((objeto) => { 
    console.log(objeto.nome +' é ' + objeto.mensagem)
})
.catch((objeto) => {
    console.log(objeto.mensagem02 + objeto.mensagem02) 
});
