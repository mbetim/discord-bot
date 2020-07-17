const { games } = require("../games.json");

module.exports = async (msg, args) => {
  const message = args.join(" ").trim();
  const query = {
    p: 4,
    count: 10,
    r: 10,
    g: "all",
    plat: "all",
  };

  // Pegando os parametros da query do usuário
  message.split("-").forEach((param) => {
    const [paramName, ...value] = param.split("=");

    query[paramName] = value.join(" ");
  });

  msg.channel.send(
    games
      .filter(
        (game) =>
          game.maxPlayers >= query.p &&
          game.requirements <= query.r &&
          (query.plat === "all" ||
            game.platform.join(" ").includes(query.plat.toLocaleLowerCase())) &&
          (query.g === "all" || game.genres.join(" ").includes(query.g.toLocaleLowerCase()))
      )
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .slice(0, query.count)
      .map((game, index) => `${index + 1} - ${game.name}`)
      .join("\n")
  );
};
