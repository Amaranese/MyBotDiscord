const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
    console.log("Connected as" + client.user.tag)
})
client.login("ODQ5MDU4OTU0NDcwMjI4MDMw.YLVpxQ.fAvNf9jlj0GXGLYrhi_nOQRBSdE")
