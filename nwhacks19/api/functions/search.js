const config = require("../common/config");

const youtube_search = require("youtube-search");

const opts = {
  maxResults: config.max_search_results,
  key: process.env.YT_API_KEY,
  type: "video"
};
console.log(process.env.YT_API_KEY);

/**
 * A simple "hello world" function
 * @param {string} q
 */
module.exports = async q => {
  const yt_res = await new Promise((resolve, reject) => {
    youtube_search(q, opts, (err, res) => {
      if (err) return reject(err)
      resolve(res.map(c => ({
          name: c.title,
          id: c.id,
          thumbnail: c.thumbnails.medium.url
        }))
      );
    })
  });
  return yt_res
}
