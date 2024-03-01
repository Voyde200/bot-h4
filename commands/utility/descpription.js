const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("description")
    .setDescription("Donne la description du Petit Poireau"),
  async execute(interaction) {
    await interaction.reply(
      `Bonjour ${interaction.user.username}, je suis Petit Poireau, mon but est de te donner ton emploi du temps à l'aide de commande sur discord`
    );
  }
};
