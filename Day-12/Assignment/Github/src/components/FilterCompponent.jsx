import React from "react";

const FilterComponent = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="all">All</option>
      <option value="PushEvent">PushEvent</option>
      <option value="PullRequestEvent">PullRequestEvent</option>
    </select>
  );
};

export default FilterComponent;
