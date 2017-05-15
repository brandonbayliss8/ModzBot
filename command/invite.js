exports.run = (bot, message, args) => {
  message.reply("Invite me! https://discordapp.com/oauth2/authorize?client_id=297437352127627264&scope=bot&permissions=2136472639")
  console.log(`${message.createdAt}: ${message.author.username} requested the bot\'s invite link`)
};
