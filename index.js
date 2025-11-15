require('dotenv').config();  // 🔥 Debe ir arriba del todo

const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// CONFIGURACIONES DESDE .env
const BOT_A_DETECTAR = process.env.BOT_A_DETECTAR;
const CANAL_A_ESCUCHAR = process.env.CANAL_A_ESCUCHAR;
const ROL_PING = process.env.ROL_PING;

client.on('clientReady', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', (msg) => {

  // Detectar SOLO el canal
  if (msg.channel.id !== CANAL_A_ESCUCHAR) return;

  // Detectar SOLO el bot específico
  if (msg.author.id !== BOT_A_DETECTAR) return;

  // Detectar el texto clave
  if (!msg.content.includes("Una nueva sala de aventura ha sido creada")) return;

  // --- EMBED ---
  const embed = new EmbedBuilder()
    .setTitle("_ _ ㅤ⬫ ׄ **N**u*e*vɑ **sɑlɑ** de **Ɑ**vent*u*rɑ ꪆ୧ ⬫")
    .setDescription("ㅤㅤ╰╮ ﹒  La señal está activa, es momento de actuar.")
    .setColor(0x8C6A44);

  // Enviar ping + embed
  msg.channel.send({
    content: `<@&${ROL_PING}>`,
    embeds: [embed]
  });

});

client.login(process.env.TOKEN);
