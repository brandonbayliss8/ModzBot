exports.run = (bot, message, args) => {
  if (!args.join(" ")) return message.reply(`Please mention someone.`);
  let person = args.join(" ");
  let random = Math.floor( Math.random() * 100) + 1;
  message.channel.send(`There\'s ${random}% love between ${person} and ${message.author.username}`);
}
