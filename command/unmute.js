exports.run = (bot, message, args) => {
  let muterole = message.guild.roles.find("name", `ModzMute`);
  let admin = message.member.hasPermission("KICK_MEMBERS");
  let muteuser = message.mentions.users.first();
  if (!admin) return message.reply(":no_entry_sign: Error: You miss the correct permissions to do that!")
  if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) return message.reply("\:no_entry_sign: I do not have permission(Manage Roles) to do that!");
  if (!muteuser) return message.reply("Please mention an user to unmute!")
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
                    member.removeRole(message.guild.roles.find("name", `ModzMute`)).catch(console.error);
                    message.reply(`:speaker: Successfully unmuted ${muteuser}!`)
} else {
let member = message.guild.member(message.mentions.users.first());
member.removeRole(message.guild.roles.find("name", `ModzMute`)).catch(console.error);
message.reply(`:speaker: Successfully unmuted ${muteuser}!`)
}
}
