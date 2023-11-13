import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ShowList from "./components/ShowList";
import Pagination from "./components/Pagination";
import GenreFilter from "./components/GenreFilter";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [shows, setShows] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("http://api.tvmaze.com/shows")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const onSearch = () => {
    setSearchTerm(inputValue);
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  const filteredShows = shows.filter(show => 
    (selectedGenre === "All" || show.genres.includes(selectedGenre)) &&
    show.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = filteredShows.slice(indexOfFirstShow, indexOfLastShow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Header />
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={onSearch}
      />
      <GenreFilter shows={shows} setSelectedGenre={setSelectedGenre} resetPagination={resetPagination} />
      <ShowList shows={currentShows} searchTerm={searchTerm} />
      <Pagination
        showsPerPage={showsPerPage}
        totalShows={filteredShows.length}
        paginate={paginate}
      />
      <Footer />
    </div>
  );
};

export default App;
