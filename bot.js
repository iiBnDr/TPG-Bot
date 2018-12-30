const Discord = require("discord.js");
const client = new Discord.Client();
var adminprefix = '#'
var prefix = "#";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : :ok_hand: عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#bc | TheProGamers Bot`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`🌹  ولكم نورت السيرفر🌹 
👑اسم العضو  ${member}👑  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message' , message => {//Toxic Codes
  if(message.author.bot) return;//Toxic Codes
  if(message.content.startsWith(prefix + "ping")) {//Toxic Codes
 message.channel.send('pong').then((msg) => {//Toxic Codes
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`//Toxic Codes
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);//Toxic Codes
 })//Toxic Codes
  }  //Toxic Codes
 });//Toxic Codes


client.login(process.env.BOT_TOKEN);
