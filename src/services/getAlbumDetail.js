import { DAY_IN_MILLISECONDS } from "./constants";

const getAlbumDetail = async (id) => {
  try {
    const cache = JSON.parse(localStorage.getItem(`albumWithSongs-${id}`));

    const isCacheExpired = Date.now() - cache?.time > DAY_IN_MILLISECONDS;

    if (cache && !isCacheExpired) {
      return cache.data;
    }

    const res = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${id}&entity=song`
      )}`
    );

    if (res.ok) {
      const body = await res.json();

      const [info, ...songs] = body.results;

      const albumDetail = { info, songs };

      localStorage.setItem(
        `albumWithSongs-${id}`,
        JSON.stringify({
          data: albumDetail,
          time: Date.now(),
        })
      );

      return albumDetail;
    }

    throw new Error("Unexpected error fetching API");
  } catch (error) {
    console.error(error);
  }

};

export default getAlbumDetail;
