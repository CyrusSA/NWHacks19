const config = require('../common/config')
const storage = require('../common/storage')
const roomUtil = require('../common/room-util')

/**
* Remove the first item of the playlist (call after each song is done)
* @param {string} room_id
*/
module.exports = async (room_id) => { // TODO: additional secret key parameter to restrict this to the room owner
  let to_play;
  await storage.map(room_id, old_room => {
    const to_play_voting_pool_index = roomUtil.findBestIndex(old_room)
    to_play = old_room.voting_pool.splice(to_play_voting_pool_index, 1)
    old_room.now_playing = to_play
    return old_room
  })
  return to_play
}
