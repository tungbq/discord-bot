const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

require('dotenv').config();
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const token = process.env.DISCORD_TOKEN;

const commands = [
	new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong!'),
	new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!'),
	new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!'),
	new SlashCommandBuilder()
		.setName('messi')
		.setDescription('Replies with troll ronaldo info!'),
	new SlashCommandBuilder()
		.setName('top-dev-to')
		.setDescription('Replies with link to top of Dev.to page!'),
	new SlashCommandBuilder()
		.setName('random-user')
		.setDescription('Get random name!'),
	new SlashCommandBuilder()
		.setName('football-today')
		.setDescription('Get today matches from 24h.com.vn!'),
].map((command) => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest
	.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands'))
	.catch(console.error);
