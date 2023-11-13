const Pagination = ({ totalShows, showsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalShows / showsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav>
      <ul className="flex flex-wrap justify-center mt-10">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="list-none mx-1 mb-2">
              <button
                onClick={() => paginate(number)}
                className={`py-2 px-4 rounded bg-slate-500 text-white hover:bg-slate-900 text-xs md:text-sm lg:text-base`}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;