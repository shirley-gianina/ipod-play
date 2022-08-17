import { useParams } from "react-router-dom";
import useAlbumDetail from "../../hooks/useAlbumDetails";
import LoadingIcon from "../../components/LoadingIcon";
import AlbumInfo from "../../components/AlbumInfo";
import AlbumSongs from "../../components/AlbumSongs";

const AlbumDetails = () => {
  const { id } = useParams();
  const { album, loading } = useAlbumDetail(id);

  return (
    <section>
      <h2>Album details {id}</h2>

      {loading && <LoadingIcon />}

      {album.info && <AlbumInfo info={album.info} />}

      {album.songs?.length > 0 && <AlbumSongs songs={album.songs} />}

    </section>
  );
};

export default AlbumDetails;
