const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
    receivedMessage.channel.send("Message received from " + receivedMessage.author.toString() + ": " + receivedMessage.content)
})
client.login("XXXXXXXXXXX") // Replace XXXXX with your bot token