exports.run = (bot, message, args) => {
  if (message.guild !== null) {
      var output = args.join(" ");

      bot.channels.get("301421032210956289").sendMessage("Bug report from " + "**" + message.member.guild.name + "**" + "```\n" + output + "\n```");

    message.channel.sendMessage("Bug reported! For more support, join my Discord server: https://discord.gg/T2cvH6v");
    console.log(`${message.createdAt}: ${message.member.guild.name} reported a bug`)
  } else {
    message.reply("Try it again in a server!")
  }
}
