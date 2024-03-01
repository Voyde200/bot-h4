const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("link")
    .setDescription("Donne le lien du git"),
  async execute(interaction) {
    await interaction.reply(
      `Lien du git https://github.com/Voyde200/bot-h4`
    );
  }
};
