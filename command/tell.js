exports.run = (bot, message, args) => {
  let msg = args.join(" ");
  if (!msg) return message.reply("Please specify something for me to say");
  message.channel.send(msg);
  console.log(`Just said in ${bot.guilds.get(message.guild.id).name}: ${msg}`);
}
