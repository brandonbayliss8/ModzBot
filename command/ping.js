exports.run = (bot, message, args) => {
    message.channel.send("huh")
      .then(m => {
          m.edit(`:ping_pong: Pong! (took: **${m.createdTimestamp - message.createdTimestamp} ms**)`)
        });
     }
