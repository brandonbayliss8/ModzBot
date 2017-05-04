exports.run = (bot, message, args) => {
  if (message.author.id !== "264331473308483584") return message.reply(`You don't have permission to run this command!`)
  if(!args || args.size < 1) return message.channel.reply(`Must provide a command name to reload.`);
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`The command **${args[0]}** has been reloaded`);
  console.log(`${message.createdAt}: The command ${args[0]} has been reloaded`);
};
