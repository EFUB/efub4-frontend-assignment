# Todolist 성능 최적화

## useMemo

- App.js에서 todoList를 세팅할 때 useMemo로 todoList 배열을 메모이제이션하였다.

## useCallback

- App.js에서 테스트 버튼을 클릭할 때 다른 컴포넌트들을 리렌더링하지 않기 위해 useCallback으로 감싸 최적화하였다.
- TodoItem.js에서 deleteTodo와 completeTodo에서 useCallback을 사용하여 투두를 삭제하거나 완료 체크 표시를 할 때 리렌더링이 일어나지 않도록 했다.

## React.memo

- App.js에서 테스트 버튼 컴포넌트를 선언하는 부분에서 React.memo를 사용하였다.

## (+) 커스텀 훅

- App.js에서 로컬스토리지의 투두 저장 정보를 가저오는 부분을 커스텀 훅으로 분리하여 성능을 최적화하고 코드의 가독성을 높여보았다.
- 로컬스토리지의 setItem 부분을 useEffect로 감싸 데이터를 보다 효과적으로 불러오도록 하였다.
