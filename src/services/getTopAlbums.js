import { DAY_IN_MILLISECONDS } from "./constants";

const getTopAlbums = async (lang) => {
  try {
    const cache = JSON.parse(localStorage.getItem(`topAlbums-${lang}`));

    const isCacheExpired = Date.now() - cache?.time > DAY_IN_MILLISECONDS;

    if (cache && !isCacheExpired) {
      return cache.data;
    }

    const res = await fetch(
      `https://api.allorigins.win/raw?url=https://rss.applemarketingtools.com/api/v2/${lang}/music/most-played/50/albums.json`
    );

    if (res.ok) {
      const body = await res.json();

      const topAlbums = body.feed.results;

      localStorage.setItem(
        `topAlbums-${lang}`,
        JSON.stringify({
          data: topAlbums,
          time: Date.now(),
        })
      );

      return topAlbums;
    }

    throw new Error("Unexpected error fetching API");
  } catch (error) {
    console.error(error);
  }
};

export default getTopAlbums;
