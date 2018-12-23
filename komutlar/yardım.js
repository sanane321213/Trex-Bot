const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
            .setDescription("\n[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=525981590510370817&scope=bot&permissions=2146958847) \n[Destek Sunucusu](https://discord.gg/PZvwhWM)")
      .setAuthor(`Trex`, client.user.avatarURL)     
	  .setThumbnail(client.user.avatarURL)
	  .addField(`Trex - Yardım`, `\n:white_small_square: | **t!yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **t!kullanıcı**: Kullanıcılar için komutlar.\n:white_small_square: | **t!eğlence**: Eğlenmek için bulunan komutlar! \n:white_small_square: | **t!botsahibi**: Bot sahibine özel komutlar!`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };