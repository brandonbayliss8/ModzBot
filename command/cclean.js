exports.run = (bot, message) => {
    message.channel.fetchMessages({limit: 75})
      .then(msgs => {
        let msg_array = msgs.array().filter(m => m.author.id === bot.user.id);
        message.channel.bulkDelete(msg_array);
      });
    message.channel.send(":white_check_mark: Commands cleaned!");
}
