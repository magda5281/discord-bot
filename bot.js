import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as greeting from './commands/greeting.js';

config();

const client = new Client({
 intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client
 .login(process.env.TOKEN)
 .then(() => {
  console.log('Login successful!');
 })
 .catch((error) => {
  console.error('Login failed:', error);
 });

function readyDiscord() {
 console.log('Bot is ready!', client.user.tag);
}

function messageCreate(message) {
 if (message.content === 'greeting') {
  message.channel.send('Helo!');
 }
}

async function handleIntercation(interaction) {
 if (!interaction.isCommand()) return;

 const { commandName } = interaction;

 if (commandName === 'greeting') {
  await greeting.execute(interaction);
 }
}

client.once(Events.ClientReady, readyDiscord);

client.on(Events.InteractionCreate, handleIntercation);
