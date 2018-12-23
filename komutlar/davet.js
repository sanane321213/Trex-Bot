const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {
	
	const davet = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setDescription("\n:white_small_square: | Botu sunucuna davet etmek için [Buraya Tıkla!](https://discordapp.com/oauth2/authorize?client_id=525981590510370817&scope=bot&permissions=2146958847) \n:white_small_square: | Botun destek sunucusuna gitmek için [Buraya Tıkla!](https://discord.gg/PZvwhWM)")
  return message.channel.sendEmbed(davet);
	
};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet',
    description: 'Botu sunucuna davet eder.',
    usage: 'avet'
  };