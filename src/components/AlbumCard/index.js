import "../AlbumCard/style.css";

const AlbumCard = ({ album }) => {
  const { name, artistName, artworkUrl100 } = album;

  return (
    <>
      {album ? (
        <div className="card">
          <h2>{name}</h2>
          <h3>{artistName}</h3>
          <img src={artworkUrl100} alt={name} />
        </div>
      ) : null}
    </>
  );
};

export default AlbumCard;
