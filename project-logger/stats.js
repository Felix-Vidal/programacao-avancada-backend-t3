const {freemem, totalmem} = require("os");
const log = require('./logger')

// ele vai ficar em loop que sera executado de 1 em 1 segundo
setInterval(() => {

    const total =  parseInt(totalmem()/1024/1024); // total de memoria
    const freeMen = parseInt(freemem()/1024/1024); // total de memoria livre
    const usage = 100 - (parseInt((freeMen/total)*100)); // total de memoria em uso

    // coloca as variaves anteriores em um objeto com a formatação de MB do lado de cada variavel 
    const stats = {
        total: `${total} MB`,
        freeMen: `${freeMen} MB`,
        usage: `${usage} %`
    }

    
    console.clear(); // limpa terminal
    console.log('+++++ Memory Stats +++++'); // formatação para aparecer no terminal
    console.table(stats);// colocar o objeto no terminal com a formatação de tabela 

    //enviar objeto em formato JSON para a função log para processar o conteúdo 
    log(JSON.stringify(stats) + '\n')
    
}, 1000);
