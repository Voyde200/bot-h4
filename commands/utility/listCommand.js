const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("list")
    .setDescription("Donne la liste des commandes de Petit Poireau"),
  async execute(interaction) {
    await interaction.reply(
      `Voici la liste de mes commandes :
      /description : donne la description du bot
      /list : donne la liste des commandes
      /dev : donne la liste des dévelopeur
      /link : donne le lien du git `
    );
  }
};
