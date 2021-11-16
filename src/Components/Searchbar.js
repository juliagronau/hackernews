import { useState } from "react";
import Results from "./Results";

const Searchbar = () => {
  const [input, setInput] = useState("react");

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(event.target.firstChild.value);
    event.target.firstChild.value = "";
  };

  return (
    <div className="content-container px-4">
      <h2  className="my-4">What are you looking for?</h2>
      <form className="input-group mb-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="type a search term" className="form-control"></input>
        <button type="submit" className="btn btn-primary">GO!</button>
      </form>
      <Results key={input} query={input} />
    </div>
  );
};

export default Searchbar;
