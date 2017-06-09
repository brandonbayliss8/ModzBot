var rps = ["Rock", "Paper", "Scissors"]
exports.run = (bot, message, args) => {
  let choice = args.join(" ").toLowerCase();
  if (choice === '') return message.reply("Please specify either rock, paper or scissors.");
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return message.reply(`Please specify either rock, paper or scissors. ${choice} isn't one of those you fag`);
    message.reply(rps[Math.floor(Math.random() * rps.length)] + ", I win mother rossija stronk I always win lol \:flag_ru\:");
}
