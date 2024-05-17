import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const activeStyle = {
    color: "pink",
    fontSize: 20,
  };
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  return (
    <div className="layout">
      <div id="date">오늘은? {formattedDate}</div>
      <header>
        <button>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            🏠Home
          </NavLink>
        </button>
        <button>
          <NavLink
            to="/Todo"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ☑️Todo
          </NavLink>
        </button>
        <button>
          <NavLink
            to="/ShowCalendar"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            📅Calendar
          </NavLink>
        </button>
        <button>
          <NavLink
            to="/ShowTime"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ⏱️Time
          </NavLink>
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
