const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./c.json");
const joins = require("./joins.js");
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on('ready', () => {
  const guild = client.guilds.get(config.guildID);
  client.user.setPresence({status: config.botstatus, game: { name: config.games, type: 0, url: "https:/\/www.twitch.tv/Animeshon_Music"}})
  const statusch = client.channels.get(config.members);
      statusch.setName(`📊 Members: ${guild.members.size}`);
  const statusch1 = client.channels.get(config.channelz);
      statusch1.setName(`📊 Channels: ${guild.channels.size}`);
  const statusch2 = client.channels.get(config.status);
      statusch2.setName(`📊 Status: ONLINE`);
  console.log("READY");
});
// Member Counting Stuff
client.on('guildMemberAdd', () => {
 const guild = client.guilds.get(config.guildID);
 const statusch = client.channels.get(config.members);
      statusch.setName(`📊 Members: ${guild.members.size}`);
});
client.on('guildMemberRemove', () => {
const guild = client.guilds.get(config.guildID);
const statusch = client.channels.get(config.members);
      statusch.setName(`📊 Members: ${guild.members.size}`);
});
client.on('channelCreate', () => {
const guild = client.guilds.get(config.guildID);
  const statusch = client.channels.get(config.channelz);
      statusch.setName(`📊 Channels: ${guild.channels.size}`);
});
client.on('channelDelete', () => {
const guild = client.guilds.get(config.guildID);
  const statusch = client.channels.get(config.channelz);
      statusch.setName(`📊 Channels: ${guild.channels.size}`);
});

//Just a ping Pong to make sure it is still online (Replace 695204554752393277 with your 0wn Bots ID)
client.on('message', (message) => {
 if (message.author === bot) return;
 if (message.content === `${config.prefix}ping`){
   message.channel.send(":wave: Still Here!");
   }
});
client.on('message', (message) => {
 if (message.author === bot) return;
 if (message.content === `${config.prefix}reboot`){
    message.delete();
   if (message.author.id !== config.ownerID) return;
   const statusch2 = client.channels.get(config.status);//replace 695499541088305252 with a DIFFERENT VOICE
	statusch2.setName(`📊 Status: OFFLINE`);
	client.destroy().then(client.login(config.token));
   }
});
client.login(config.token)
joins.joins(client)
