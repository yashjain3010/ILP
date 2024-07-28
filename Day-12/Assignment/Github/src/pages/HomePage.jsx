import React, { useState } from "react";
import SearchComponent from "../components/SearchComponent";
import ActivityList from "../components/ActivityList";
import { fetchGithubActivities } from "../api/github";

const HomePage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    const data = await fetchGithubActivities(username);
    setActivities(data);
    setLoading(false);
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <ActivityList activities={activities} />}
    </div>
  );
};

export default HomePage;
