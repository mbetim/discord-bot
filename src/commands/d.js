module.exports = async (msg, args) => {
  let min = 1;
  let max = 6;

  if (args.length > 0 && !isNaN(parseInt(args[0]))) {
    const strNumbers = args[0].split("-");

    if (strNumbers.length >= 3) {
      min = parseInt(strNumbers[1]);
      max = parseInt(strNumbers[2]);
    } else if (strNumbers.length === 2) {
      min = parseInt(strNumbers[0]);
      max = parseInt(strNumbers[1]);
    } else {
      max = parseInt(strNumbers[0]);
    }
  }

  const i = Math.floor(Math.random() * (max - min + 1)) + min;

  await msg.channel.send(`Seu número é: ${i}`);
};
