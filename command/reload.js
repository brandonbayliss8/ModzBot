const fs = require("fs");
exports.run = (bot, message, args) => {
   if(message.author.id != "264331473308483584") return;
  if (args[0] === "all") {
    message.reply("Reloading all commands");
    bot.functions.core.loadCommands(bot);
    return;
  }
  let command;
  if (bot.commands.has(args[0])) {
    command = args[0];
  } else if (bot.aliases.has(args[0])) {
    command = bot.aliases.get(args[0]);
  }
  if (!command) {
    if (args[0].includes(".js")) args[0] = args[0].replace(".js","");
    fs.stat(`./cmd/${args[0]}.js`, (err, stats) => {
      if (err) return message.channel.sendMessage(`I cannot find the command: ${args[0]}`);
      if (stats.isFile()) {
        message.channel.sendMessage(`Loading New Command: ${args[0]}`)
        .then(m => {
          bot.functions.core.reload(bot, args[0])
          .then(() => {
            m.edit(`Successfully Loaded: ${args[0]}`);
          })
          .catch(e => {
            m.edit(`Command load failed: ${args[0]}\n\`\`\`${e.stack}\`\`\``);
          });
        });
      }
    });
  } else {
    message.channel.sendMessage(`Reloading: ${command}`)
    .then(m => {
      bot.functions.core.reload(bot, command)
      .then(() => {
        m.edit(`Successfully reloaded: ${command}`);
      })
      .catch(e => {
        m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
      });
    });
  }
};
