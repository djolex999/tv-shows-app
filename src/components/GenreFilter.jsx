const GenreFilter = ({ shows, setSelectedGenre }) => {
  const genres = [...new Set(shows.flatMap(show => show.genres))];

  return (
    <div className="genre-filter flex items-center justify-center">
      <select onChange={(e) => setSelectedGenre(e.target.value)} className="p-2 rounded">
        <option value="All">All Genres</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
