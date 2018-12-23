const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Trex`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`Trex - Kullanıcı`, `\n:white_small_square: | **t!ailemiz**: Bot hakkında bilgi verir.\n:white_small_square: | **t!ping**: Botun pingini gösterir. \n:white_small_square: | **t!hava-durumu**: Hava durumunu gösterir. \n:white_small_square: | **t!wasted**: Profilinize wasted efekti ekler. \n:white_small_square: | **t!rol-bilgi**: Etiketlenen rol hakkında bilgi verir. \n:white_small_square: | **t!tavsiye**: Bot hakkındaki tavsiyelerinizi kurucuya iletir. \n:white_small_square: | **t!mesaj-küçült**: Yazdığınız mesajı küçültür. \n:white_small_square: | **t!dcnitro**: Profilinize nitro efekti ekler. \n:white_small_square: | **t!ascii**: Yazınızı ascii art Olarak Yazar. \n:white_small_square: |  **t!atatürk**: Atatürk resimleri gösterir. \n:white_small_square: |  **t!avatar**: Avatarınızı gösterir. \n:white_small_square: | **t!davet-kur**: Bulunduğunuz sunucunun davet linkini atar. \n:white_small_square: | **t!istatistik**: Botun istatistik bilgilerini gösterir. \n:white_small_square: | **t!kullanıcı-bilgi**: Komutu kullanan kişi hakkında bilgi verir. \n:white_small_square: | **t!sunucu-bilgi**: Sunucu hakkındaki bilgiyi gösterir. \n:white_small_square: | **t!rol-bilgi**: Rol hakkında bilgi verir. \n:white_small_square: | **t!davet-kur**: Bulunduğunuz sunucunun davetini kurar.`)
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
    name: 'kullanıcı',
    description: 'kullanıcı',
    usage: 'kullanıcı'
  };