import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import ShowCalendar from "./pages/ShowCalendar";
import Layout from "./Layout";
import ShowTime from "./pages/ShowTime";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/ShowCalendar" element={<ShowCalendar />} />
        <Route path="/ShowTime" element={<ShowTime />} />
      </Route>
    </Routes>
  );
}

export default App;
