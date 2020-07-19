const d = require("./d");
const ping = require("./ping");
const play = require("./play");

let descriptions = "";

const commands = [ping, d, play].reduce((all, command) => {
  command.triggers.forEach((trigger) => (all[trigger] = command.handler));

  descriptions += `**${command.name}** - ${command.description}\n`;

  if (command.example) {
    descriptions += `${command.example}\n`;
  }

  descriptions += "\n";

  return all;
}, {});

const allCommands = (msg) => msg.channel.send(descriptions);

commands["help"] = allCommands;
commands["commands"] = allCommands;
commands["comandos"] = allCommands;

module.exports = async (msg) => {
  const args = msg.content.split(" ");

  if (args.length === 0 || args[0].charAt(0) !== "!") return;

  const command = args.shift().substr(1);

  if (commands[command]) {
    commands[command](msg, args);
  }
};
