const Discord = require("Discord.js");
exports.run = (bot, message, args) => {
  if (message.guild !== null) {
      var output = args.join(" ");

      //if (message.author.id === "298144419088039946") return console.log(`${message.createdAt}: ${message.author.username} tried to report a bug but was blacklisted`)//blacklist

      bot.channels.get("308533381048696832").sendMessage("A suggestion was submitted from " + "**" + message.member.guild.name + "**" + "```\n" + output + "\n```");
      bot.channels.get("307878217228877827").sendMessage(`**${message.author.username}** filled a suggestion \n \n User ID: **${message.author.id}** \n Server name: **${message.member.guild.name}** \n Server ID: **${message.member.guild.id}**`)

    message.channel.sendMessage("Suggestion submitted! For more info, join my Discord server: https://discord.gg/T2cvH6v");
    console.log(`${message.createdAt}: ${message.member.guild.name} submitted a suggestion`)
  } else {
    message.reply("Try it again in a server!")
  }
}
