exports.run = {
   usage: ['dnsiii', 'donasi'],
   async: async (m, {
      client
   }) => {
      client.sendMessageModify(m.chat, info(), m, {
            title: 'D O N A S I',
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/51269b4727fbf6ff01f3c.jpg')
            })         
   },
   error: false,
   cache: true,
   location: __filename
}

let info = () => {
   return `*❏ D O N A S I*
┏━━⬣ 
┃Mari berdonasi bersama kami
┃untuk meringankan user beban
┃
┃Bagi Anda yang memiliki saldo lebih
┃bisa di donasikan melalui berikut ini.
┃
┃D A N A : [ 0857-3079-4089 ]
┃P U L S A : [ 0857-3079-4089 ]
┃G O P A Y : [ 0857-3079-4089 ]
┗⬣

note : *donasi seikhlasnya aja*`
}
