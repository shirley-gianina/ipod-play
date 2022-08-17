import { useState, useEffect } from "react";
import getAlbumDetail from "../services/getAlbumDetail";

const useAlbumDetail = (id) => {
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchAlbums = async () => {
      const dataDetail = await getAlbumDetail(id);
      setAlbum(dataDetail);
      setLoading(false);
    };

    fetchAlbums();
  }, [id]);

  return { album, loading };
};

export default useAlbumDetail;
