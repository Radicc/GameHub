const GenreList = () => {
  const genres = [
    "MMORPG",
    "Shooter",
    "Anime",
    "Strategy",
    "Fantasy",
    "Sci-Fi",
    "Racing",
    "Social",
    "Sports",
  ];
  return (
    <ul>
      {genres.map((ganre) => (
        <li key={ganre}>{ganre}</li>
      ))}
    </ul>
  );
};

export default GenreList;
