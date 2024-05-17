import { useState, useEffect } from "react";

function ShowTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="clock">
      <h1 id>Clock</h1>
      <span>지금은 {time.toLocaleTimeString()} 입니다</span>
    </div>
  );
}

export default ShowTime;
