const Discord = require("discord.js");
require("dotenv").config();

const commandHandler = require("./commands");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("Bot is ready");
});

client.on("message", commandHandler);

client.login(process.env.BOT_TOKEN);
