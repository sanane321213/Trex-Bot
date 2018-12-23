const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Trex`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`Trex - Yetkili`, `\n:white_small_square: | **t!ses-kanalı-aç**: Bir ses kanalı açar. \n:white_small_square: | **t!metin-kanalı-aç**: Bir metin kanalı açar. \n:white_small_square: | **t!çekiliş-yap**: Çekiliş yapar. \n:white_small_square: | **t!temizle**: Belirtilen miktarda mesaj siler. \n:white_small_square: | **t!rol-ver**: Etiketlenen kişiye etiketlenen rol verilir. \n:white_small_square: | **t!kick**: İstediğiniz kişiyi sunucudan atar. \n:white_small_square: | **t!oylama**: Oylama Yapar. \n:white_small_square: | **t!unban**: İstediğiniz kişinin banını kaldırır. \n:white_small_square: | **t!ban**: Belirtilen kullanıcıyı banlar.`)
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
    name: 'yetkili',
    description: 'yetkili',
    usage: 'yetkili'
  };