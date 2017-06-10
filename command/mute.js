exports.run = (bot, message, args) => {
  let admin = message.member.hasPermission("KICK_MEMBERS");
  let muterole = message.guild.roles.find("name", `ModzMute`);
  let muteuser = message.mentions.users.first();
  let channeloverwrite = bot.guilds.get(message.guild.id).channels
  if (!admin) return message.reply(":no_entry_sign: Error: You miss the correct permissions to do that!")
  if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) return message.reply("\:no_entry_sign: I do not have permission(Manage Roles) to do that!");
  if (!muteuser) return message.reply("Please mention an user to mute!")
  if (muteuser === message.author) return message.reply("Don't try to mute yourself :wink:")
  if (!muterole) {
  let guild = message.member.guild;
  message.guild.createRole({ name: "ModzMute" ,permissions: []}).then(role => {
                        // servermutes[gueldid]["muteRoleID"] = message.guild.roles.find("name", "SaltMuted").id;
                        // Array.from(message.guild.channels).map(v=>overwritePermissions(message.guild.roles.get(servermutes[gueldid]["muteRoleID"]),{SEND_MESSAGES:false}));
                        Array.from(message.guild.channels).forEach(function(item, index) {
                            var Ilike = item[0];
                            //console.log(Ilike);
                            var trainz = message.guild.channels.get(Ilike);
                            //console.log(trainz.name);
                            //console.log(muterole);
                            trainz.overwritePermissions(message.guild.roles.find("name", `ModzMute`),{SEND_MESSAGES:false});
                            console.log("Successfully created mute role");
                            message.channel.sendMessage("Successfully created mute role");
                        });

                    });
                    let member = message.guild.member(message.mentions.users.first());
                    member.addRole(message.guild.roles.find("name", `ModzMute`)).catch(console.error);
                    message.reply(`:mute: Successfully muted ${muteuser}!`)
} else {
let member = message.guild.member(message.mentions.users.first());
member.addRole(message.guild.roles.find("name", `ModzMute`)).catch(console.error);
message.reply(`:mute: Successfully muted ${muteuser}!`)
}
}
