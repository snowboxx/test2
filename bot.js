const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");

var ourserver = ㄨ    ˣᵒ  family house  ˣᵒ    じ ; 
var ms = 4500; // سرعة التعديل على اسم الروم
client.on('guildMemberAdd', async member => {
    setInterval(function (){ 
   client.channels.find('id', '568566239451021312').setName("Welcome To");
   client.channels.find('id', '568566239451021312').setName(${ourserver});
   client.channels.find('id', '568566239451021312').setName(${member.user.tag});

    }, ms); 
});


client.login(process.env.BOT_TOKEN);
