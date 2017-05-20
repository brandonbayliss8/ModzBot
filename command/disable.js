exports.run = (bot, message, args) => {
  if (!args[0]) return;
  let command = args[0].toLowerCase();
  args = args.join(" ").substring(command.length + 1);
  if (command === "logs") {
    message.reply(`Would you like to disable the logs?\n*This will be canceled in 10 seconds. Type \`yes\` or \`no\`.*`).then(() => {
      message.channel.awaitMessages(m => m.author.id === message.author.id && ['yes', 'no'].includes(m.content), {time: 10000, maxMatches: 1})
      .then(collected => {
      if (!collected.size) {
      return;
    } else if (collected.first().content.toLowerCase() === 'yes') {
      message.channel.sendMessage(`Disabling the logs...`);
      console.log(`${date} at ${time}: ${message.author.username} disabled the logs in ${message.guild.name}.`);
      message.guild.channels.find("name", `mod-log`).delete();
      message.reply(`Logs disabled!`)
    } else if (collected.first().content.toLowerCase() === 'no') {
      message.channel.sendMessage("Returning...");
    } else {
      message.reply("You didn't say `yes` or `no`. Returning...");
    }
    });
    });
    }
  }
