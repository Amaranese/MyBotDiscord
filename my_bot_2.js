const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
})
client.login("XXXXXXXXXXX") // Replace XXXXX with your bot token