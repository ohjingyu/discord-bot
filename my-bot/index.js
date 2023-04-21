const fs = require('node:fs');
const { Client, Collection, Events, GatewayIntentBits, Routes, REST, SlashCommandBuilder } = require('discord.js');
const { token } = require('./config.json');
// const prefix = "!";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
module.exports = client;
client.commands = new Collection();

client.once(Events.ClientReady, c => {
    console.log(`${client.user.tag} Ready!`);
    const rest = new REST({ version: 10 }).setToken(token)
    rest.put(Routes.applicationCommands(client.user.id), {
        body: [
            new SlashCommandBuilder()
                .setName(`핑`)
                .setDescription(`핑을 찍어줍니다`)
        ]
    })
});

client.on(Events.InteractionCreate, async(interaction) => {
    if(interaction.commandName !== '핑') return
    await interaction.reply({
        content:`${client.ws.ping}ms`
    })
})


client.login(token);