const Discord = require('discord.js');
const client = new Discord.Client();
const music = require('discord.js-music-v11');
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');
 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(Playing With your heart,"http://twitch.tv/S-F%22)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


var ourserver = ㄨ    ˣᵒ  family house  ˣᵒ    じ ; 
var ms = 4500; // سرعة التعديل على اسم الروم
client.on('guildMemberAdd', async member => {
    setInterval(function (){ 
   client.channels.find('id', '568566677349072908').setName("Welcome To");
   client.channels.find('id', '568566677349072908').setName(${ourserver});
   client.channels.find('id', '568566677349072908').setName(${member.user.tag});

    }, ms); 
});

client.on('message', msg => {
if (msg.content == '$join') {
if (msg.member.voiceChannel) {
if (msg.member.voiceChannel.joinable) {
msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
}
}
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
client.channels.get("568566677349072908").join(); 
});

client.login(process.env.BOT_TOKEN);
