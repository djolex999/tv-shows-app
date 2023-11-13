const ShowItem = ({ show }) => {
  return (
    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden shadow-lg mt-10 mx-10">
      <img
        src={show.image?.medium || "poster.jpg"}
        alt={show.name}
        className="h-auto w-auto"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{show.name}</h3>
        <p className="text-sm text-gray-600">
          {show.summary.replace(/<[^>]+>/g, "")}
        </p>
        <div className="mt-2">
          <span className="text-sm font-semibold">Rating: </span>
          <span className="text-sm">{show.rating.average || "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;