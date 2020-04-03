const Discord = require('discord.js');
const fs = require('fs');
const { registerCmds } = require('register-cmd-discord');
require('dotenv').config();

const { TOKEN, PREFIX } = process.env;
const SMCodes = new Discord.Client();
SMCodes.commands = new Discord.Collection();
SMCodes.aliases = new Discord.Collection();
global.__basedir = __dirname;

function registerPathCommands() {
  const cmds = registerCmds('commands', SMCodes.commands, SMCodes.aliases);
  SMCodes.commands = cmds.cmds;
  SMCodes.aliases = cmds.als;
}
registerPathCommands();

SMCodes.on('raw', async dados => {
  if(dados.t !== 'MESSAGE_CREATE' || dados.d.channel_id !== '691738219464884254') return;
});

SMCodes.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  
  if(message.content.startsWith('beta')) {
    if(message.author.id !== process.env.OWNER) return console.log(message.author.id);
  }

  if(!message.content.startsWith(PREFIX)) return;
	let args = message.content.slice(PREFIX.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
	let commandFile = SMCodes.commands.get(cmd) || SMCodes.commands.get(SMCodes.aliases.get(cmd));
  if(commandFile) {
    commandFile.run(SMCodes, message, args);
  }
});

SMCodes.login(TOKEN);