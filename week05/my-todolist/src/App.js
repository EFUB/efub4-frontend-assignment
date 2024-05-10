import { Routes, Route, NavLink } from "react-router-dom";
//import StateTest from "./StateTest";
import "./App.css";
import MyTodolist from "./components/pages/MyTodolist";
import MyPlaylist from "./components/pages/MyPlaylist";

function App() {
  const style = {
    width: "300px",
    display: "flex",
    justifyContent: "space-around",
    margin: "0 auto",
    padding: "10px",
    textDecoration: "none",
  };
  return (
    <>
      <div style={style}>
        <NavLink to="/">
          {" "}
          <img
            src="/images/memo.png"
            alt="MyTodo"
            style={{ width: "50px", height: "50px" }}
          />
        </NavLink>
        <NavLink to="/myPlaylist">
          <img
            src="/images/record.png"
            alt="MyPli"
            style={{ width: "50px", height: "50px" }}
          />
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<MyTodolist />} />
        <Route path="/myPlaylist" element={<MyPlaylist />} />
      </Routes>
    </>
  );
}

export default App;
