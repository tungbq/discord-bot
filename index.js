// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
// const { token } = require('./config.json');

require('dotenv').config();
const token = process.env.DISCORD_TOKEN;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(
			`Server name: ${interaction.guild.name} \nTotal members: ${interaction.guild.memberCount}`
		);
	} else if (commandName === 'user') {
		await interaction.reply(
			`Your tag: ${interaction.user.tag} \nYour id: ${interaction.user.id}`
		);
	} else if (commandName === 'messi') {
		await interaction.reply('Is the best player in the world :v');
	} else if (commandName === 'top-dev-to') {
		await interaction.reply('https://dev.to/top/week');
	}
});

// Login to Discord with your client's token
client.login(token);
