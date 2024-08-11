import React, { useState } from "react";
import { saveSearchHistory, getSearchHistory } from "../utils/localStorage";

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    saveSearchHistory(query);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    const history = getSearchHistory();
    setSuggestions(history.filter((item) => item.startsWith(e.target.value)));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => setQuery(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchComponent;
