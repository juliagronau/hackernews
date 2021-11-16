import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Pagination from "./Pagination";

const Results = ({ query }) => {
  const [results, setResults] = useState(); //represents the articles we get as response
  const [articlesPerPage] = useState(7); //defining how many articles per page we want
  const [currentPage, setCurrentPage] = useState(1); //defining that we will start at page 1
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  //const mockUpJSON = "./hackernews.json";
  const url = `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=80`;

  // für Mockup JSON
  // useEffect(() => {
  //     axios.get(mockUpJSON).then((response) => {
  //       setResults(response.data.hits);
  //       console.log(response.data.hits);
  //     });
  //   }, []);

  //für echte API
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setResults(response.data.hits);
        if (response.data.hits.length === 0) {
          alert(
            "There are no news matching your search. Please try another search term."
          );
        }
      })
      .catch((error) => alert(error));
  }, [url]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2 className="my-4">News for "{query}"</h2>
      {results ? (
        results
          .slice(indexOfFirstArticle, indexOfLastArticle)
          .map((result) => (
            <div className="mb-4" key={result.objectID}>
              <h3>{result.title}</h3>
              <a href={result.url} rel="noreferrer" target="_blank">
                Link to article
              </a>
            </div>
          ))
      ) : (
        <ClipLoader color="purple" size={150} />
      )}
      {results && (
        <Pagination
          articlesPerPage={articlesPerPage}
          totalNumberOfArticles={results.length}
          paginate={paginate}
        />
      )}
    </div>
  );
};

export default Results;
