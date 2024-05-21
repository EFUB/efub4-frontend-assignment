import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/detail/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
