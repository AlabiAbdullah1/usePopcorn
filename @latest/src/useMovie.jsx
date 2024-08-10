import { useEffect, useState } from "react";

const KEY = import.meta.env.VITE_MOVIE_KEY;

export function useMovie(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      // Check if any call back function is called
      //   callback?.();

      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          // Handle the error if there is no internet:
          if (!res.ok)
            throw new Error("Something went wrong with fetching the movies");

          //   if (!res.ok) {
          //     return setError("Failed to fetch Movie, Check Internet");
          //   }

          const data = await res.json();

          if (data.Response === false) {
            throw new Error("Movie not found!");
          }

          setMovies(data.Search);
          setError("");
        } catch (err) {
          console.error(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      //   handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
