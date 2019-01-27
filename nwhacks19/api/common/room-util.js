const roomUtil = {
  findBestIndex: room =>
    room.voting_pool.findIndex(c => c.upvotes - c.downvotes >= config.approval_threshold),
  findBest: room =>
    room.voting_pool[roomUtil.findBestIndex(room)],
}
module.exports = roomUtil
