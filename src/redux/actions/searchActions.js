import store from "../store";
import URLs from "../../consts/URLs";
import {
  fetch_repos,
  receive_repos,
  receive_error,
  set_search_phrase,
  increment_page_counter,
  decrement_page_counter
} from "./actionCreators";

export const searchGitHubRepos = (repoName, pageNumber) => {
  store.dispatch(fetch_repos());
  return function(dispatch, getState) {
    console.time("Search API call took: ");

    return fetch(`${URLs.GITHUB_SEARCH_URL}?q=${repoName}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No repositories were found with this name");
        } else {
          dispatch(receive_repos(data));
          console.timeEnd("Search API call took: ");
        }
      })
      .catch(err => dispatch(receive_error()));
  };
};

//Redux thunk

// 1) Dispatch an action to say that you started fetching
// 2) Return a function that returns a resolved promise
// 3) Fetch the URL you want to fetch
// 4) Return the resolved promise
// 5)

export const setCentralSearchPhrase = searchPhrase => {
  store.dispatch(set_search_phrase(searchPhrase));
};

export const incrementPageCounter = () => {
  store.dispatch(increment_page_counter());
};

export const decrementPageCounter = () => {
  store.dispatch(decrement_page_counter());
};
