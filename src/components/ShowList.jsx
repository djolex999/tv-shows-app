import ShowItem from "./ShowItem";

const ShowList = ({ shows, searchTerm }) => {
  const filteredShows = shows.filter((show) =>
    show.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="show-list">
      {filteredShows.map((show) => (
        <ShowItem key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ShowList;