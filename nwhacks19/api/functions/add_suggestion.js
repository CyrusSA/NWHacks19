const storage = require('../common/storage')

/**
 * Create a new suggestion to vote on
 * @param {string} room_id
 * @param {string} name
 * @param {string} id
 */
module.exports = async (room_id, name, id) => {
  await storage.add_suggestion(room_id, name, id);
}
