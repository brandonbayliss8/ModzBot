const Discord = require("discord.js");
exports.run = (bot, member) => {
  //Leave message
  bot.on('guildMemberRemove', member => {
    if (member === bot.user.id) return;
    let guild = member.guild;
    const embed = new Discord.RichEmbed()
      embed.setColor('#CE0000')
      .setAuthor(`Join log`)
      .setDescription(`**${member}** left **${guild}**`)

    var msg;
    msg = `Bye ${member}!`;
    guild.defaultChannel.sendMessage(msg);
    console.log(`${member} left ${member.guild.name}`)
    //bot.channels.get("305057938567987200").sendEmbed(embed);
});
}
