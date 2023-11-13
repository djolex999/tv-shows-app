const GenreFilter = ({ shows, setSelectedGenre, resetPagination }) => {
  const genres = [...new Set(shows.flatMap(show => show.genres))];

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    resetPagination();
  };

  return (
    <div className="genre-filter flex items-center justify-center">
      <select onChange={handleGenreChange} className="p-2 rounded">
        <option value="All">All Genres</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;