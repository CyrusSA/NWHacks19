const config = require("../common/config");

const kv = require("lib")({ token: process.env.STDLIB_LIBRARY_TOKEN }).utils({
  table: config.kv_table
}).kv;

const empty_room = (name, qr) => ({
  now_playing: null,
  voting_pool: [],
  name: name,
  qr: qr
});

const empty_suggestion = (name, id) => ({
  upvotes: 0,
  downvotes: 0,
  name: name,
  id: id
});

const storage = {
  get_room: room_id => kv.get({ key: room_id }),
  add_room: (room_id, name, qr) =>
    kv.set({
      key: room_id,
      value: { now_playing: null, voting_pool: [], name: name, qr: qr }
    }),
  clear_room: room_id => kv.clear({ key: room_id }),
  get_all: () => kv.entries(),
  clear_all: () => kv.tables.truncate("yeet"),
  // generic update, for internal use only (mainly) because it's unsafe
  update_room: (room_id, value) => kv.set({ key: room_id, value }),
  add_suggestion: (room_id, name, id) =>
    storage.map(room_id, c => {
      c.voting_pool.push({
        upvotes: 1,
        downvotes: 0,
        name,
        id
      });
      return c;
    }),
  // modify the value at the key using f. Returns the previous value, although if f modifies it those will remain
  map: async (key, f) => {
    const old_val = await kv.get({ key });
    await kv.set({ key, value: f(old_val) });
    return old_val;
  }
};
module.exports = storage;
