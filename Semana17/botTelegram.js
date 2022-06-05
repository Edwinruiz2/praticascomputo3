const {Telegraf} = require("telegraf")
const bot = new Telegraf("5308988172:AAHg_fVUW0NIt2ADY-UNUOoZebjE1Btw9sU");

bot.start((ctx)  =>{
    ctx.reply(`Programación Computacional IV, Bienvenido ${ctx.from.first_name}`);
});

//comando personalizado

bot.command(['saludar','saludo','hola'], (ctx) =>{
    ctx.reply("Buenos dias");
});

bot.on('sticker', (ctx)=>{
    ctx.reply("Buen sticker");
});

//shorturl.at/qXY29
bot.launch();

