const bedrock = require('bedrock-protocol')

const client = bedrock.createClient({
  host: 'SavanaCraft.aternos.me', // ex: xxxx.aternos.me
  port: 53113,
  username: 'Bot24h',
  offline: true
})

client.on('spawn', () => {
  console.log('Bot Bedrock online!')

  setInterval(() => {
    client.queue('move_player', {
      runtime_entity_id: client.entityId,
      position: client.position,
      rotation: { x: 0, y: 0 },
      on_ground: true
    })
  }, 30000)
})

client.on('disconnect', r => console.log('Disconnect:', r))
client.on('error', e => console.log('Erro:', e))
