exports.run = (bot, message, args) => {
  let hq = "297442085861064705"
  if (message.guild.id !== hq) return;
  let role = message.guild.roles.get(`309629121401454595`);
    if (message.member.roles.has(role.id)) {
        message.member.removeRole(role);
        message.reply("Updates role removed.")
    } else if (!message.member.roles.has(role.id)) {
        message.member.addRole(role);
        message.reply("Updates role added! You will now receive notifications about ModzBot.");
    }
}
