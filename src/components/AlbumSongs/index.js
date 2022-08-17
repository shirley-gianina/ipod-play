const AlbumSongs = ({ songs }) => {
  return (
    <ul>
      {songs.map((song) => (
        <li key={song.trackId}>
          <h2>{song.trackName}</h2>
          <audio controls>
            <source src={song.previewUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </li>
      ))}
    </ul>
  );
};

export default AlbumSongs;
