const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/MTBkCvm.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `Bᴏᴛ Nᴀᴍᴇ: Sᴘɪʀɪᴛ sᴇʀ Bᴏᴛ 

ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/917994093863

sᴘɪʀɪᴛ ʙᴏᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/KDpHHM89WL6395ApKyFrmF

Gɪᴛʜᴜʙ ʟɪɴᴋ:  https://github.com/SPIRITSER/SPIRIT-SER

Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ :   https://github.com/SPIRITSER/SPIRIT-SER/tree/master/uploads

Sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ: https://github.com/SPIRITSER/SPIRIT-SER/tree/master/sticker 

Cʜᴀɴɴᴇʟ :  https://youtube.com/channel/UCBv1Z1zkOmdGeWU2QRdYBnA

😈sᴘɪʀɪᴛ Sᴇʀ Bᴏᴛ Cʀᴇᴀᴛᴇᴅ Bʏ Sᴘɪʀɪᴛ Sᴇʀ 😈
`}) 

}));
