import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder();
data.setName('greeting').setDescription('This is demo hello!');

export async function execute(interaction) {
 await interaction.reply('Hello!');
}
