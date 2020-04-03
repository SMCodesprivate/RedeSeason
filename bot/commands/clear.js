const Discord = require('discord.js');

exports.run = async (SMCodes, message, args) => {
  message.delete();
  if(message.author.id !== process.env.OWNER && !message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você não tem permissão para executar esse comando.');
  if(isNaN(args[0]) || args[0] < 1) return message.reply('Por favor digite um valor numérico apatir de 1');
  if(args[0] > 100) {
    if(args[0]%100 !== 0) return message.channel.send('Pro favor se quiser uma limpeza com mais de 100 itens digite um número inteiro divisível por 100');
    let counter = 0;
    while(counter <= args[0]) {
      message.channel.bulkDelete(100).catch(O_o=>{
        counter = args[0];
      });
      counter += 100;
    }
    return;
  }
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Foram deletadas ${args[0]} mensagens do canal ${message.channel}`);
  }).catch(O_o=>{});
}

exports.config = {
  name: 'clear',
  help: 'Para a execução de comando é necessário a permissão MANAGE_MESSAGES, com essa permissão adquirida você poderá limpar o chat.',
  aliases: [],
  category: 'random'
}