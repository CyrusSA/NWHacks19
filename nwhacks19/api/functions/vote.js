const storage = require('../common/storage')

/**
 * Vote up or down on a song
 * @param {string} room_id
 * @param {string} song_id
 * @param {boolean} is_upvote
 */
module.exports = async (room_id, song_id, is_upvote) => {
  await storage.map(room_id, c => {
    c.voting_pool.map(song => {
      if (song.id === song_id) {
        if (is_upvote) {
          song.upvotes++
        } else {
          song.downvotes++
        }
      }
      return song
    })
    return c
  })
};
