module.exports = {
  name: "!ping",
  triggers: ["ping"],
  description: 'Retorna um "pong"',
  handler: async (msg, args) => {
    msg.reply("Pong!");
  },
};
