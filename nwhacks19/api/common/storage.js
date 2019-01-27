const config = require('../common/config');

const kv = require('lib')({token: process.env.STDLIB_LIBRARY_TOKEN}).utils({table: config.kv_table}).kv;

const empty_room = {
  votes: [],
  deadline: 0,
  playlist: [],
}

const storage = {
  get_room: (room_id) => kv.get({key: room_id }),
  add_room: (room_id) => kv.set({ key: room_id, value: empty_room }),
  clear_room: (room_id) => kv.clear({key: room_id}),
  get_all: () => kv.entries(),
  // generic update, for internal use only (mainly) because it's unsafe
  update_room: (room_id, value) => kv.set({ key: room_id, value }),
  shift_playlist: async (room_id, duration) => {
    const room = await storage.get_room(room_id)
    room.playlist.shift()
    await storage.update_room(room_id, room)
  },
}
module.exports = storage
