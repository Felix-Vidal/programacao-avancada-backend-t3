const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter();

// Escuta o evento 'log' e executa a função fs.appendFile para adicionar a mensagem em um arquivo de texto chamado log.txt
emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
        if (err) throw err;
    });
    console.log("Executando..."); // Exibe uma mensagem para indicar que a função está em execução
});

// Função para emitir um evento chamado 'log' com uma mensagem adquirida como parâmetro
function log(message) {
    emitter.emit("log", message);
}

module.exports = log;
