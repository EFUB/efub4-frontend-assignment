import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import VideoPage from "./pages/VideoPage";
import "./css/app.css";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/todo" element={<TodoPage />} />
                    <Route path="/video" element={<VideoPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
