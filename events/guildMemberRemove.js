const Discord = require('discord.js')
exports.run =  async(client,member) => {
  const msg=member.user.tag+",has left the server \n"
    member.guild.channels.get('682515470410317844').send(msg)
  }
