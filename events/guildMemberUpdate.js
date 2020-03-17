const Discord = require('discord.js')
exports.run = async ( client,oldMember, newMember)=> {
  // declare changes
   const guild = newMember.guild;
  var Changes = {
    unknown: 0,
    addedRole: 1,
    removedRole: 2,
    username: 3,
    nickname: 4,
    avatar: 5
  }
  var change = Changes.unknown

  // check if roles were removed
  var removedRole = ''
  oldMember.roles.forEach(function (value) {
    if (newMember.roles.get(value.id) == null) {
      change = Changes.removedRole
      removedRole = value.name
    }
  })

  // check if roles were added
  var addedRole = ''
  newMember.roles.forEach(function (value) {
    if (oldMember.roles.get(value.id) == null) {
      change = Changes.addedRole
      addedRole = value.name
    }
  })

  // check if username changed
  if (newMember.user.username != oldMember.user.username) {
    change = Changes.username
  }
  // check if nickname changed
  if (newMember.nickname != oldMember.nickname) {
    change = Changes.nickname
  }
  // check if avatar changed
  if (newMember.user.avatarURL != oldMember.user.avatarURL) {
    change = Changes.avatar
  }
  // post in the guild's log channel
   let ChangeEmbed = new Discord.RichEmbed()

  .setColor("#0099ff")
  .setAuthor(newMember.user.tag,newMember.user.displayAvatarURL)
  .setTimestamp()
  .setFooter(`Author ID: ${newMember.user.id}`);


  var log = guild.channels.get('689338414390182086')
  if (log != null) {
    switch (change) {
      case Changes.unknown:
        log.send('**[User Update]** ' + newMember)
        break
      case Changes.addedRole:
        ChangeEmbed.setTitle('**ROLE ADDED**')
          .setDescription(newMember.displayName + '** was given the `' + addedRole+'` role.**')
         if(addedRole==='Server Booster'){
         let serverBooster = new Discord.RichEmbed()
          .setTitle('**Server Booster**')
          .setColor("#0099ff")
          .setDescription(newMember.displayName + ' Thanks for Boosting the Server!!')
          .setAuthor('WEdding Royale','https://cdn.discordapp.com/avatars/689340923301199925/ac6f98b33426868ee8f7b13cbec5c4b6.png?size=128')
          .setTimestamp()
          .setFooter(`Developed by SVGムParZivaL`);

          var sBoost = guild.channels.get('682484830918803481')
          sBoost.send({embed:serverBooster})
         }
        break
      case Changes.removedRole:
        ChangeEmbed.setTitle('**ROLE REMOVED**')
          .setDescription(newMember.displayName + ' **was removed from the `' + removedRole+'` role.**')
        break
      case Changes.username:
        ChangeEmbed.addField("Before", oldMember.user.discriminator)
        .addField("After", newMember.user.discriminator)
        .setTitle("**USERNAME CHANGE**")
        break
      case Changes.nickname:
        ChangeEmbed.addField("Before", oldMember.displayName)
        .addField("After", newMember.displayName)
        .setTitle("**NICKNAME CHANGE**")
        break
      case Changes.avatar:
        log.send('**[User Avatar Changed]** ' + newMember)
        break
    }
    log.send({embed:ChangeEmbed});
  }
}
