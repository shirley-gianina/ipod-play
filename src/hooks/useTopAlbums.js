import { useState, useEffect } from "react";
import getTopAlbums from "../services/getTopAlbums";

const useTopAlbums = (lang) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchAlbums = async () => {
      const data = await getTopAlbums(lang);
      setAlbums(data);
      setLoading(false);
    };

    fetchAlbums();
  }, [lang]);

  return { albums, loading };
};

export default useTopAlbums;
