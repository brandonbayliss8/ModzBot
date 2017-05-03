exports.run = (bot, message, args) => {
  let memedog = [
"    ╭━━━━╮               ",
"    ╰┃ ┣▇━▇                 ",
"     ┃ ┃  ╰━▅╮ ",
"     ╰┳╯ ╰━━┳╯        ",
"      ╰╮ ┳━━╯            ",
"     ▕▔▋ ╰╮╭━╮   ",
"    ╱▔╲▋╰━┻┻╮╲╱▔▔▔╲",
"    ▏  ▔▔▔▔▔▔▔  O O┃ ",
"    ╲╱▔╲▂▂▂▂╱▔╲▂▂▂╱",
"     ▏╳▕▇▇▕ ▏╳▕▇▇▕",
"     ╲▂╱╲▂╱ ╲▂╱╲▂╱",
  ]
  message.reply("Here is Memedog for you!");
  message.channel.sendMessage(memedog);
}
