import axios from "axios";

export const fetchGithubActivities = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/events`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
