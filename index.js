const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// CONFIGURACIONES
const BOT_A_DETECTAR = "429457053791158281";    // ID del bot que crea las aventuras
const CANAL_A_ESCuchar = "1424603346081288302"; // ID del canal donde debe mirar
const ROL_PING = "1439150547025530981";         // ID del rol al que se pinguea

client.on('clientReady', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', (msg) => {

  if (msg.channel.id !== CANAL_A_ESCuchar) return;
  if (msg.author.id !== BOT_A_DETECTAR) return;
  if (!msg.content.includes("Una nueva sala de aventura ha sido creada")) return;

  const embed = new EmbedBuilder()
    .setTitle("_ _ ㅤ⬫ ׄ **N**u*e*vɑ **sɑlɑ** de **Ɑ**vent*u*rɑ ꪆ୧ ⬫")
    .setDescription("ㅤㅤ╰╮ ﹒ La señal está activa, es momento de actuar.")
    .setColor(0x8C6A44);

  msg.channel.send({
    content: `<@&${ROL_PING}>`,
    embeds: [embed]
  });

});

require('dotenv').config();
client.login(process.env.TOKEN);
