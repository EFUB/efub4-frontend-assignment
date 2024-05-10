import { useEffect, useState, useCallback } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const [buttonEmoji, setButtonEmoji] = useState("🌞");

  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
      setButtonEmoji("🌛");
    } else if (theme == "dark") {
      setTheme("light");
      setButtonEmoji("🌞");
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.backgroundColor =
      theme === "light" ? "#f2eae4" : "black";
  }, [theme]);

  return { toggleTheme, buttonEmoji };
};

export default useTheme;
