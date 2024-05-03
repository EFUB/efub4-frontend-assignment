# efub4-frontend-assignment-1

💙 이펍 4기 프론트엔드 1학기 세미나 과제 제출 레포지토리


## 6주차 세미나 과제
#### App.js
* useTheme이라는 이름의 커스텀 훅 생성하여 배경색을 바꾸는 데 이용하였습니다.
  ```
  function useTheme(theme, toggleTheme) {
    useEffect(() => {
      document.documentElement.style.backgroundColor =
        theme === "light" ? "#f2eae4" : "black";
    }, [theme, toggleTheme]);
  }
  ```
* useCallback을 이용하여 테마 변수와 버튼의 텍스트를 바꾸었습니다.
  ```
    const toggleTheme = useCallback(() => {
      if (theme == "light") {
        setTheme("dark");
        setButtonEmoji("🌛");
      } else if (theme == "dark") {
        setTheme("light");
        setButtonEmoji("🌞");
      }
    }, [theme]);
  ```
#### Header.js, TodoAdd.js, TodoItem.js, TodoList.js
* React.memo를 이용하여 Header의 불필요한 리렌더링을 줄였습니다.
  ```
  export default React.memo(Header);
  ```
