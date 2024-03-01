const { SlashCommandBuilder } = require("discord.js");
const { ev } = require('../../Cal.js');
// ev.description.val

module.exports = {
  data: new SlashCommandBuilder()
    .setName("today")
    .setDescription("Affiche le planning d'aujourd'hui"),
  async execute(interaction) {
    let schedule = ev.description.val; // Accédez à la propriété val de l'objet ev.description
    await interaction.reply(`Voici le planning d'aujourd'hui : \n\n${schedule}`);
  },
};