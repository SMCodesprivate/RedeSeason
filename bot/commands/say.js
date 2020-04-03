const Discord = require("discord.js");

exports.run = async (SMCodes, message, args) =>{
  message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não tem permissão para executar esse comando.");
  if(args.length <= 0) return message.reply("Por favor digite uma mensagem para eu re-enviar");
  const sayMessage = args.join(" ");
  message.channel.send(sayMessage);
}

exports.config ={
    name: 'say',
    help: 'Esse comando re-envia uma mensagem em meu nome.',
    aliases: [],
    category:'random'
}