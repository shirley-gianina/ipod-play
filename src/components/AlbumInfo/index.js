const AlbumInfo = ({ info }) => {
  const { collectionName, artistName, releaseDate, artworkUrl100 } = info;

  return (
    <>
      <div className="card">
        <img src={artworkUrl100} alt={artistName} />
        <h2>{collectionName}</h2>
        <h3>
          {artistName} • {releaseDate.split("T")[0]}
        </h3>
      </div>
    </>
  );
};

export default AlbumInfo;
