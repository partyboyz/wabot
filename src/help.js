const { fetchJson } = require('./../lib/fetcher')
const fetch = require('node-fetch')
const axios = require('axios');
const moment = require('moment-timezone');
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss');
anu = fetchJson('https://arugaz.my.id/api/edu/corona?country=indonesia')
asu = anu.results.cases
teks = `INFO CORONA VIRUS INDONESIA\n    ${time}\n\n[ *Kasus* ]: ${asu}\n[ *Kematian* ]: ${asu.deaths}\n[ *Kasus Hari Ini* ]: ${asu.todayCases}\n[ *Total Kematian Hari ini* ]: ${asu.todayDeaths}`
const help = (prefix) => {
	return `
     *PRTYBYZ-BOT*

${teks}

┏━━━[ *Sticker Commands* ]━━━>
┗━[ *PRTYBYZ* ]━━━>

┏━━> *${prefix}sticker* or *${prefix}stiker*
┃
┗━> _for image/video to sticker_

┏━━> *${prefix}sticker nobg* or *${prefix}stiker nobg*
┃
┗━> _for image to sticker no background_

┏━━> *${prefix}toimg*
┃
┗━> _for sticker to image_

┏━━> *${prefix}tsticker* or *${prefix}tstiker*
┃
┗━> _for text to sticker_



┏━━━>[ *Sosmed Commands* ]━━━>
┗━[ *PRTYBYZ* ]━━━>

┏━━> *${prefix}ytmp3*
┃
┗━> _for convert YTVIDEO to YTAUDIO_

┏━━> *${prefix}ytsearch*
┃
┗━> _for Search Youtube_

┏━━> *${prefix}tiktok*
┃
┗━> _for download tiktok video_

┏━━> *${prefix}tiktokstalk*
┃
┗━> _for stalk profile user_



┏━━━>[ *Meme Commands* ]━━━>
┗━[ *PRTYBYZ* ]━━━>

┏━━> *${prefix}meme*
┃
┗━> _for random meme images [english]_

┏━━> *${prefix}memeindo*
┃
┗━> _for random meme images [indo]_



┏━━━>[ *Others Commands* ]━━━>
┗━[ *PRTYBYZ* ]━━━>

┏━━> *${prefix}gtts*
┃
┗━> _for convert text to speech/audio_

┏━━> *${prefix}loli*
┃
┗━> _for random loli images_

┏━━> *${prefix}nsfwloli*
┃
┗━> _for random nsfw loli images_

┏━━> *${prefix}url2img*
┃
┗━> _for take web screenshots_

┏━━> *${prefix}simi*
┃
┗━> _for your message replied by simi_

┏━━> *${prefix}ocr*
┃
┗━> _for take the text in image_

┏━━> *${prefix}wait*
┃
┗━> _for search anime Films_

┏━━> *${prefix}setprefix*
┃
┣━> _for replace prefix_
┗>[ *Note* ] : _For Bot Owner_



┏━━━>[ *Group Comands* ]━━━>
┗━[ *PRTYBYZ* ]━━━>

┏━━> *${prefix}add*
┃
┣━> _for add member into group_
┗>[ *Note* ] : _The Bot Must Be Admin !_

┏━━> *${prefix}kick*
┃
┣━> _for kick members group_
┗>[ *Note* ] : _The Bot Must Be Admin !_

┏━━> *${prefix}promote*
┃
┣━> _for make the group admin_
┗>[ *Note* ] : _The Bot Must Be Admin !_

┏━━> *${prefix}demote*
┃
┣━> _for make drop group Admin_
┗>[ *Note* ] : _The Bot Must Be Admin !_

┏━━> *${prefix}linkgroup*
┃
┣━> _for take the group link_
┗>[ *Note* ] : _The Bot Must Be Admin !_

┏━━> *${prefix}leave*
┃
┣━> _for Make bot leave the group_
┗>[ *Note* ] : _Group Admin & Owner Bot_

┏━━> *${prefix}tagall*
┃
┣━> _for tags all group members_
┗>[ *Note* ] : _Group Admin Usage_

┏━━> *${prefix}simih*
┃
┣━> _for activate simi mode in the group_
┗>[ *Note* ] : _Group Admin Usage_`
}

exports.help = help
