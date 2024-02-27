const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Allow the bot to say hello back"),
  async execute(interaction) {
    await interaction.reply(
      `Bonjour ${interaction.user.username}`
    );
  }
};
