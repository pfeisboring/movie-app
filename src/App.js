import "./App.css";
import { useState } from "react";
import { moviesData } from "./Data";
import MoviesList from "./Components/moviesList";
import AddMovie from "./Components/addMovie";
import Search from "./Components/search";

function App() {
  const [movies, setMovie] = useState(moviesData);
  const [search, setSearch] = useState("");
  const add = (newMovie) => setMovie([...movies, newMovie]);
  return (
    <div className="App">
      <div className="topNav">
        <Search setSearch={setSearch} />
        <AddMovie add={add} />
      </div>
      <MoviesList movies={movies} search={search} />
    </div>
  );
}

export default App;
