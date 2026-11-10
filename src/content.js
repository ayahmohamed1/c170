// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  // --- Secret Date / Password Protection ---
  password: {
    code: '1217',
    title: 'enter a secret date',
    subtitle: 'a date only we know ♡',
    buttonText: 'UNLOCK ♡',
    errorMessages: [
      'no babee!',
      'no try 1217',
    ],
    sticker: '/images/hello-kitty-crying.jpg',
  },

  welcome: {
    greeting: 'hello ',
    name: 'my love',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'memories', icon: '📸', sticker: '/images/hello-kitty-camera.jpg', label: 'Captured\nMemories' },
      { id: 'flowers', icon: '🌷', sticker: '/images/hello-kitty-flowers.jpg', label: 'Virtual\nFlowers' },
      { id: 'song', icon: '🎵', sticker: '/images/hello-kitty-music.jpg', label: 'our\nsong' },
      { id: 'letter', icon: '💌', sticker: '/images/hello-kitty-cake.jpg', label: 'Love\nLetter' },
    ],
  },

  memories: {
    title: 'our memories',
    returnButton: 'RETURN',
    images: [
      { src: '/images/memory1.jpg', label: '❤️', tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️', tag: 'cute' },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
      { src: '/images/memory4.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory5.jpg', label: '❤️', tag: 'always' },
      { src: '/images/memory6.jpg', label: '❤️', tag: 'mine' },
      { src: '/images/memory7.jpg', label: '❤️', tag: 'us' },
      { src: '/images/memory8.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory9.jpg', label: '❤️', tag: 'you' },
      { src: '/images/memory10.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory11.jpg', label: '❤️', tag: 'you' },
      { src: '/images/memory12.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory13.jpg', label: '❤️', tag: 'you' },
      { src: '/images/memory14.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory15.jpg', label: '❤️', tag: 'you' },
      { src: '/images/memory16.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory17.jpg', label: '❤️', tag: 'you' },
    ],
  },



  flowers: {
    title: 'for you',
    returnButton: 'RETURN',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautiful',
    poems: [
      `"I love you and every little thing about you ♡"`,
      `"I get lost in your eyes; nothing else compares ✨"`,
      `"Everything sweet and beautiful reminds me of you 🌷"`,
      `"The mother of my future kids ♥️"`,
      `"The heart and warmth of my home 🏡"`,
      `"My wife and my greatest pride 👑"`,
      `"My whole world and everything in it 💫"`,
      `"My family, my home, and my everything 💕"`,
    ],
  },

  song: {
    title: 'our song',
    returnButton: 'RETURN',
    // Add these .mp3 files to public/music/ and update the titles as needed.
    songs: [
      { title: 'ayami beek', artist: 'for you 🎵', audioSrc: '/music/music.mp3' },
      { title: 'young and beautiful', artist: 'for you 🎵', audioSrc: '/music/music2.mp3' },
      { title: 'wanna be yours', artist: 'for you 🎵', audioSrc: '/music/music3.mp3' },
    ],
    remindsText: 'this song always makes me think of you',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    returnButton: 'RETURN',
    message: `الي هنون ❤️
أنا بحبك بحبكك يا نصيبي وقدري و رفيقة مشواري و ايامي بحبك بجد و عمري م هسيبك لوحدك ولا هسيبك لدماغك أنا دايما جمبك وهفضل جمبك ومعاكي ومش هسيبك ولا هستغني عنك أبدا يا هنا فاهمة.؟ يا احلي حاجة حلوة حصلتلي ف حياتي بحبك و بعشقكك و بموت فيكي انتي حبيبتي انتي روحي انتي عمري انتي حياتي كلها الحلوة الي هعيشها يا هنا ، ربنا يخليكي ليا و ميحرمنيش منك أبدا و ميفرقناش من بعض أبدا و يديم بينا الخير و المحبة و السعادة ونبقي كويسين مع بعض دايما و يبعد عننا اي خنقه و اي زعل يارب و يجمعنا علي خير فالحلال و اسأل الله ان يجعلكي يا هنا بنت عبد العزيز زوجةً صالحةً لي فالحلال يارب يا نصيبي وقدري ورفيقة مشواري و ايامي..
بحبك يا ملكة كل النساءِ."❤️👸🏻`,
    signoff: 'I love you always,',
    signature: 'Your love ♡',
  },


}

export default content
