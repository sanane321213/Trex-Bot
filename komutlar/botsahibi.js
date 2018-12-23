const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Trex`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`Trex - Bot Sahibi`, `\n:white_small_square: | **t!reboot**: Bot yeniden başlar. \n:white_small_square: | **t!mesaj-at**: İstediğin kişiye dm den mesaj atar.\n:white_small_square: | **t!duyur**: İstediğiniz şeyi tüm kullanıcıya duyurur. (DM)`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'botsahibi',
    description: 'bot sahibi',
    usage: 'botsahibi'
  };