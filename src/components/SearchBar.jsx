const SearchBar = ({ inputValue, setInputValue, onSearch }) => {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="search-bar flex justify-center my-5">
      <input
        type="text"
        placeholder="Search TV Shows"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-input p-2 rounded-l-md"
      />
      <button
        onClick={onSearch}
        className="bg-slate-800 text-white p-2 rounded-r-md hover:bg-slate-700 transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;