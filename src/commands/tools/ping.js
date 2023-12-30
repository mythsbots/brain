const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('returns client ping (boring bot shit require for testing blah blah blah)'),
        async execute(interaction, client) {
            const message = await interaction.deferReply({
                fetchReply: true
            });

            const newMessage = `brains api latency: ${client.ws.ping}\nbrains msg ping: ${message.createdTimestamp - interaction.createdTimestamp}`
            await interaction.editReply({
                content: newMessage
            });
        }
}