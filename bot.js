const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'SavanaCraft.aternos.me',     // ex: abc123.aternos.me
  port: 53113,             // Java = 25565
  username: 'Bot24h',      // Nick do bot
  version: false        // MUITO IMPORTANTE
})

bot.on('login', () => {
  console.log('✅ Bot entrou no servidor!')
})

bot.on('spawn', () => {
  console.log('🌍 Spawn completo')

  // Anti-AFK
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 500)
  }, 30000)
})

bot.on('end', () => {
  console.log('❌ Bot caiu, reconectando...')
  setTimeout(() => process.exit(1), 5000)
})

bot.on('error', err => {
  console.log('Erro:', err.message)
})
