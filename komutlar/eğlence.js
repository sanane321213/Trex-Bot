const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Trex`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`Trex - Eğlence`, `\n:white_small_square: | **t!emoji-yazı**:  Emojiden yazı yazar. \n:white_small_square: | **t!top10**: Top10 listesi. \n:white_small_square: | **t!çay-iç**: Çay içer. \n:white_small_square: | **t!stres-çarkı**: Sizin için stres çarkı çevirir. \n:white_small_square: | **t!çekiç**: Etiketlediğiniz kişiye çekiç fırlatır. \n:white_small_square: | **t!yazı-tura**: Sizin için yazı-tura yapar. \n:white_small_square: | **t!steamfiyat**: Aradığınız oyunun fiyatını bulur. \n:white_small_square: | **t!8ball**: Sihirli 8ball sorularınızı cevaplar \n:white_small_square: | **t!ara155**: Polisi Arar (ciddiye almayın. \n:white_small_square: | **t!mcbaşarım**: Minecraft Başarımı Kazanırsınız. \n:white_small_square: | **t!mesaj-döndür**: Mesajınızı tersden yazar. \n:white_small_square: | **t!simit**: Simit Yer. \n:white_small_square: | **t!serverikon**: Sunucu ikonunu gösterir. \n:white_small_square: | **t!slots**: Slots oyunu oynatır. \n:white_small_square: | **t!yaz**: İstediğiniz şeyi bota yazdırır. \n:white_small_square: | **t!gif-ara**: Mesajınızla ilgili gifleri Giphy'da aratır. \n:white_small_square: | **t!hesapla**: Belirtilen işlemi yapar.`)
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
    name: 'eğlence',
    description: 'eğlence',
    usage: 'eğlence'
  };