const { RichEmbed } = require("discord.js");
exports.run = (bot, member) => {
  //Leave message
  bot.on('guildMemberRemove', member => {
    if (member === bot.user.id) return;
    let guild = member.guild;
    const embed = new RichEmbed()
        .setColor('#CE0000')
        .setAuthor('Join log')
        .setDescription(`**${member}** left **${guild}**`);

    let msg = `Bye ${member}!`;
    guild.defaultChannel.send(msg);
    console.log(`${member} left ${member.guild.name}`)
    //bot.channels.get("305057938567987200").sendEmbed(embed);
});
}
