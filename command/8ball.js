exports.run = (bot, message, args) => {
  var answ = ["Yes", "No", "Why?", "Stfu human", "Let's find it out!", "Maybe", "I don't know mate", "Definately", "Are you fucking serious", "For sure!", "Kill yourself", "Yes", "No", "Of course!", "Of course not faggot"];
    message.channel.sendMessage(answ[Math.floor(Math.random() * answ.length)]);
}
