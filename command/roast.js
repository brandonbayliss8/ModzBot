exports.run = (bot, message, args) => {
  let roasts = [
    "Have you heard of your dad? He's so stupid he tried to wake a sleeping bag",
    "Get a life, you idiot",
    "Hello Kitty said goodbye to you",
    "You are so fat that the only alphabet letters you know are KFC",
    "You're so fat that you need cheats for Wii Fit",
    "If Got was real, He wouldn't have made something as ugly as you.",
    "You are so stupid that you look at Aliexpress for cheap lifes to buy",
    "I can explain it to you, but you probably won't understand because you're so stupid.",
    "Greenland is hotter then you",
    "You'd probably wish that you don't have such an ugly face."
  ];
  const random = Math.floor(Math.random() * roasts.length);
  if (args[0] === "me") {
    message.reply(roasts[random]);
  } else if (!args.join(" ")) {
    message.reply("please specify who I need to roast");
} else {
  message.channel.send(args.join(" ") + ", " + roasts[random]);
}
}
