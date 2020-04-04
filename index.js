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
guild.fetchBans()
  .then(banned => {
    let list = banned.map(user => user.tag).join('\n');

    // Make sure if the list is too long to fit in one message, you cut it off appropriately.
    if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;
    const statusch3 = client.channels.get(config.bans);
    statusch3.setName(`Banned: ${banned.size}`);
    console.log("READY");
})
})
// Member Counting Stuff
client.on('guildMemberAdd', () => {
 const guild = client.guilds.get(config.guildID);
 const statusch = client.channels.get(config.members);
      statusch.setName(`📊 Members: ${guild.members.size}`);
})
client.on('guildMemberRemove', () => {
const guild = client.guilds.get(config.guildID);
const statusch = client.channels.get(config.members);
      statusch.setName(`📊 Members: ${guild.members.size}`);
})
client.on('channelCreate', () => {
const guild = client.guilds.get(config.guildID);
  const statusch = client.channels.get(config.channelz);
      statusch.setName(`📊 Channels: ${guild.channels.size}`);
})
client.on('channelDelete', () => {
const guild = client.guilds.get(config.guildID);
  const statusch = client.channels.get(config.channelz);
      statusch.setName(`📊 Channels: ${guild.channels.size}`);
})
client.on("guildBanAdd", () =>{
const guild = client.guilds.get(config.guildID);
guild.fetchBans()
  .then(banned => {
    let list = banned.map(user => user.tag).join('\n');

    // Make sure if the list is too long to fit in one message, you cut it off appropriately.
    if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;
    const statusch3 = client.channels.get(config.bans);
    statusch3.setName(`Banned: ${banned.size}`);
})
client.on("guildBanRemove", () =>{
const guild = client.guilds.get(config.guildID);
guild.fetchBans()
  .then(banned => {
    let list = banned.map(user => user.tag).join('\n');

    // Make sure if the list is too long to fit in one message, you cut it off appropriately.
    if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;
    const statusch3 = client.channels.get(config.bans);
    statusch3.setName(`Banned: ${banned.size}`);
})
});
});
//Just a ping Pong to make sure it is still online (Replace 695204554752393277 with your 0wn Bots ID)
client.login(config.token)
joins.joins(client)
