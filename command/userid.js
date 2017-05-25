exports.run = (bot, message, args) => {
  let user = message.mentions.users.first();
  if (!user) return message.reply(`User ID for **${message.author.id}#${message.author.discriminator}**: \n\`\`\`${message.author.id}\`\`\``); //sends the userID of the user
  message.reply(`User ID for **${user.username}#${user.discriminator}**: \n\`\`\`${user.id}\`\`\``)
}
