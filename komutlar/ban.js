const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Kullanıcı bulunamadı!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Hayır dostum!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Onu banlıyamam!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#292139")
    .addField("Banlanan kullanıcı", `<${bUser}>`)
    .addField("Banlıyan yetkili", `<@${message.author.id}>`)
    .addField("Banlandığı kanal", message.channel)
    .addField("Açıklama", bReason);

    let guild = message.guild
    let modlog = guild.channels.find('name', 'mod-log');
    if(!modlog) return message.channel.send("mod log kanalı açmalısın.");

    message.guild.member(bUser).ban(bReason);
    modlog.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 1
};
