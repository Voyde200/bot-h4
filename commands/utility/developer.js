const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("developer")
    .setDescription("Donne la liste des developeur de Petit Poireau"),
  async execute(interaction) {
    await interaction.reply(
      `Ce bot est developé par Louis-Christophe THIRION, Laurène ARNOULD, Antoine SCHIRR et Inès ROUSSEAU lors d'un projet de H4`
    );
  }
};
