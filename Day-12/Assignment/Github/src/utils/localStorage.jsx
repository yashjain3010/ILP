const SEARCH_HISTORY_KEY = "searchHistory";

export const saveSearchHistory = (query) => {
  let history = JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY)) || [];
  if (!history.includes(query)) {
    history.push(query);
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
  }
};

export const getSearchHistory = () => {
  return JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY)) || [];
};
