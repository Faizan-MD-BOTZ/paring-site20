const PastebinAPI = require('pastebin-js');
const pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');
const { makeid } = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require('pino');
const {
    default: Arslan_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require('@whiskeysockets/baileys');

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    
    async function FAIZAN-MD⁸⁷³_PAIR_CODE() {
        const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);
        try {
            let Pair_Code_By_FAIZAN-MD⁸⁷³ = FAIZAN-MD⁸⁷³({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'fatal' }).child({ level: 'fatal' })),
                },
                printQRInTerminal: false,
                logger: pino({ level: 'fatal' }).child({ level: 'fatal' }),
                browser: Browsers.macOS('Chrome')
            });

            if (!Pair_Code_By_FAIZAN-MD⁸⁷³.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await Pair_Code_By_FAIZAN-MD⁸⁷³.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }

            Pair_Code_By_FAIZAN-MD⁸⁷³.ev.on('creds.update', saveCreds);
            Pair_Code_By_FAIZAN-MD⁸⁷³.ev.on('connection.update', async (s) => {
                const { connection, lastDisconnect } = s;
                if (connection === 'open') {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    await delay(800);
                    let b64data = Buffer.from(data).toString('base64');
                    let session = await Pair_Code_By_FAIZAN-MD⁸⁷³.sendMessage(Pair_Code_By_FAIZAN-MD⁸⁷³.user.id, { text: 'FAIZAN-MD~' + b64data });

                    let FAIZAN-MD⁸⁷³_TEXT = `
        
╔════════════════════◇
║『 SESSION CONNECTED』
║ ✨ FAIZAN-MD⁸⁷³ 🔷
║ ✨ FAIZAN-MD⁸⁷³ OFFICIAL🔷
╚════════════════════╝


---

╔════════════════════◇
║『 YOU'VE CHOSEN FAIZAN-MD⁸⁷³ 』
║ -Set the session ID in Heroku:
║ - SESSION_ID: 
╚════════════════════╝
╔════════════════════◇
║ 『••• _V𝗶𝘀𝗶𝘁 𝗙𝗼𝗿_H𝗲𝗹𝗽 •••』
║❍ 𝐎𝐰𝐧𝐞𝐫: 923266105873
║❍ 𝐑𝐞𝐩𝐨: https://github.com/Faizan-MD-BOTZ/Faizan-Ai
║❍ 𝐖𝐚𝐆𝗿𝐨𝐮𝐩: https://whatsapp.com/channel/0029Vb6oi4A1iUxR1nPxcF1P
║❍ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: https://whatsapp.com/channel/0029Vb6oi4A1iUxR1nPxcF1P
║
║ ☬ ☬ ☬ ☬
╚═════════════════════╝
𒂀 Enjoy FAIZAN-MD⁸⁷³


---

Don't Forget To Give Star⭐ To My Repo
______________________________`;

                    await Pair_Code_By_FAIZAN-MD⁸⁷³.sendMessage(Pair_Code_By_FAIZAN-MD⁸⁷³.user.id, { text: FAIZAN-MD⁸⁷³_TEXT }, { quoted: session });

                    await delay(100);
                    await Pair_Code_By_FAIZAN-MD⁸⁷³.ws.close();
                    return await removeFile('./temp/' + id);
                } else if (connection === 'close' && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    FAIZAN-MD⁸⁷³_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log('Service restarted');
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: 'Service Currently Unavailable' });
            }
        }
    }
    
    return await FAIZAN-MD⁸⁷³_PAIR_CODE();
});

module.exports = router;
