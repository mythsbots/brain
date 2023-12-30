module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`brain is reddy, he logged in on ${client.user.tag}`);
    }
}