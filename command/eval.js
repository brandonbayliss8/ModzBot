const Discord = require("discord.js");
const moment = require("moment");
const yt = require("ytdl-core");
exports.run = (bot, message, args, devs) => {
  if (message.author.id !=="264331473308483584") return;
  function clean(text) {
  if (typeof(text) === 'string')
    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    else
    return text;
    }
    try {
          const code = args.join(' ');
          if (code === "bot.token" || code === "client.token") return message.channel.sendMessage(`Haha nice try, you won't get my token :wink:`);
          let evaled = eval(code);

          if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
          message.channel.sendMessage(clean(evaled), {code:'xl'});
        } catch (err) {
          message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
}
