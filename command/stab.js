exports.run = (bot, message, args) => {
  if (message.mentions.users.first() !== undefined) {
    message.reply(`perkele сука блять I stabbed ${message.mentions.users.first()}`);
  } else {
    message.reply(`perkele сука блять I stabbed ${args.join(' ')}`);
  }
};
