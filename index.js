const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./c.json");
const joins = require("./joins.js");
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on('ready', () => {
  client.user.setPresence({status: "invisible", game: { name: `Welcoming new members!`, type: 0, url: "https:/\/www.twitch.tv/Animeshon_Music"}})
  const msg = client.channels.get("695102467045851208");//replace 695102467045851208 with a TEXT channel to send ready messages
      msg.send(`${client.user.tag} has been restarted!\nServing ${client.guilds.size}`);
  const statusch = client.channels.get("695499277744472094");// replace 695499277744472094 with a VOICE Channel ID to set USER COUNT
      statusch.setName(`Members: ${client.users.size}`);
  const statusch1 = client.channels.get("695499541088305252");//replace 695499541088305252 with a DIFFERENT VOICE channel to set Channel Count
      statusch1.setName(`Channels: ${client.channels.size}`);
  console.log("READY");
});
// Member Counting Stuff? (Not quite Working 100%)
/*
client.on('guildMemberAdd', () => {
  const statusch = client.channels.get("695499277744472094");
      statusch.setName(`Members: ${client.users.size}`);
});
client.on('guildMemberRemove', () => {
  const statusch = client.channels.get("695499277744472094");
      statusch.setName(`Members: ${client.users.size}`);
});
client.on('channelCreate', () => {
  const statusch = client.channels.get("695499541088305252");
      statusch.setName(`Channels: ${client.channels.size}`);
});
client.on('channelDelete', () => {
  const statusch = client.channels.get("695499541088305252");
      statusch.setName(`Channels: ${client.channels.size}`);
});
*/

//Just a ping Pong to make sure it is still online (Replace 695204554752393277 with your 0wn Bots ID)
client.on('message', (message) => {
 if (message.content === "<@!695204554752393277>"){
   message.channel.send(":wave: Still Here!");
   }
});
/*client.on('message', (message) => {
 if (message.content === "> <@!695204554752393277>"){
    message.delete();
   if (message.author.id !== "523579776749928449") return;
    client.destroy();
   }
});*/
client.login(config.token)
joins.joins(client)
