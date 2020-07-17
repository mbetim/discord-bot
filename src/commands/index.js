const d = require("./d");
const ping = require("./ping");
const play = require("./play");

const commands = {
  d,
  ping,
  play,
};

module.exports = async (msg) => {
  const args = msg.content.split(" ");

  if (args.length === 0 || args[0].charAt(0) !== "!") return;

  const command = args.shift().substr(1);

  if (Object.keys(commands).includes(command)) {
    commands[command](msg, args);
  }
};
