exports.run = (bot, message, args) => {
  if (!args.join(' ')) {
    message.reply(`perkele сука блять I stabbed... _you_`);
  } else {
    message.reply(`perkele сука блять I stabbed ${args.join(' ')}`);
  }
};
