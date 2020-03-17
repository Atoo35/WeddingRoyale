const Discord = require('discord.js')
exports.run = async(client,channel) => {
    if(channel.name != 'undefined'){
    let ChannelEmbed = new Discord.RichEmbed()
  .setTitle('**CHANNEL CREATED**')
  .setDescription(`**Channel created: #${channel.name}**`)
  .setColor("#0099ff")
  .setAuthor('Wedding Royale','https://cdn.discordapp.com/avatars/689340923301199925/ac6f98b33426868ee8f7b13cbec5c4b6.png?size=128')
  .setTimestamp()
  .setFooter(`Developed by SVGムParZivaL`);
    client.channels.get('689338414390182086').send({embed:ChannelEmbed});

    }
}
