const yt = require('ytdl-core');
exports.run = (bot, message, args) => {
    const url = args.join(" ");
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        const stream = yt(url, {filter: 'audioonly'});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
