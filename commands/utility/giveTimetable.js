const { SlashCommandBuilder } = require("discord.js");
const { classDescrib } = require("../../Cal.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cours")
    .setDescription("Donne l'emploi du temps"),
  async execute(interaction) {
    await interaction.reply(classDescrib);
  },
};
