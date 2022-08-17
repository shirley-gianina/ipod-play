import { Link } from "react-router-dom";
import useTopAlbums from "../../hooks/useTopAlbums";
import AlbumCard from "../../components/AlbumCard";
import LoadingIcon from "../../components/LoadingIcon";
import { useParams } from "react-router-dom";

const TopAlbums = () => {
  const { lang = "es" } = useParams();

  const { albums, loading } = useTopAlbums(lang);

  return (
    <section>
      <h2>Top Albums</h2>

      {loading && <LoadingIcon />}

      {albums.length > 0 && (
        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              <Link to={`/albums/${album.id}`}>
                <AlbumCard album={album} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TopAlbums;
