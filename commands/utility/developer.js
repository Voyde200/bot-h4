const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("developer")
    .setDescription("Donne la liste des developeur de Petit Poireau"),
  async execute(interaction) {
    await interaction.reply(
      `Ce bot est developé par ${502223686200459284}, ${680150219706466319}, ${532530736259923971}, et ${216982359092756480} lors d'un projet de H4`
    );
  }
};
