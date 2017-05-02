exports.run = (bot, message, args) => {
  const voiceChannel = message.member.voiceChannel;
  const playing = message.guild.member(bot.user).voiceChannel;
  if (!voiceChannel) {
    return message.reply(`Please be in a voice channel first!`);
    } else {
    if (!playing) {
      return message.reply(`I am not playing anything!`)
     } else {
     voiceChannel.leave();
     }
   }
 }
