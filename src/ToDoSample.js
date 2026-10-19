import { useState, useEffect } from "react"; // 1. 리액트 훅(useState, useEffect)을 패키지에서 불러온다.
import "./App.css"; // 2. 스타일링을 위해 App.css 파일을 임포트한다.

// 초기 데이터 배열 (브라우저 저장소에 데이터가 없을 때 기본적으로 보여줄 샘플 데이터)
const sample = [
  { id: 1, text: "HTML 연습" },
  { id: 2, text: "CSS 복습" },
  { id: 3, text: "자바스크립트이해" },
  { id: 4, text: "리액트프로젝트" },
];

const ToDoSample = () => {
  // 3. 브라우저 로컬 스토리지에서 기존 투두 데이터를 불러와 초기값으로 설정한다.
  const [todoData, setTodoData] = useState(() => {
    const storeTodes = localStorage.getItem("todos"); // 로컬 스토리지에 "todos"라는 키로 저장된 데이터가 있는지 가져온다.
    return storeTodes ? JSON.parse(storeTodes) : sample; // 저장된 데이터가 있으면 JSON 문자열을 객체 배열로 변환해서 쓰고, 없으면 기본 sample 배열을 쓴다.
  });

  const [inputText, setInputText] = useState(""); // 4. input 입력창에 사용자가 적는 텍스트를 실시간으로 관리하는 상태
  const [nextId, setnextId] = useState(5); // 5. 새로운 투두 아이템이 추가될 때 부여할 고유 id 번호를 관리하는 상태 (기본 4까지 있으므로 5부터 시작)

  // 6. todoData 상태가 바뀔 때마다 실행되는 부수 효과(useEffect) 훅
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoData)); // todoData 배열을 JSON 문자열 형태로 변환하여 브라우저의 localStorage에 "todos"라는 이름으로 저장한다.
  }, [todoData]); // todoData 값이 변경될 때만 이 코드가 실행된다.

  // 7. '추가' 버튼을 누르거나 엔터를 쳤을 때 새로운 투두를 등록하는 함수
  const onClick = () => {
    if (inputText.trim() === "") return; // 입력창이 빈 칸이거나 공백만 있을 때는 함수를 여기서 멈춘다(추가 방지).

    const nextTodos = [...todoData, { id: nextId, text: inputText }]; // 기존 배열(...todoData)을 복사하고, 새로운 id와 입력한 텍스트를 가진 객체를 맨 뒤에 추가한다.
    setnextId(nextId + 1); // 다음 아이템을 위해 id 번호에 1을 더해 업데이트한다.
    setTodoData(nextTodos); // 새로운 배열로 todoData 상태를 업데이트하여 화면을 다시 그려준다.
    setInputText(""); // 등록이 끝났으므로 다음 입력을 위해 input 입력창을 빈 문자열로 초기화한다.
  };

  // 8. 특정 아이템을 더블클릭했을 때 목록에서 삭제하는 함수
  const onRemove = (id) => {
    const nextTodos = todoData.filter((todo) => todo.id !== id); // 매개변수로 받은 id와 일치하지 않는 아이템들만 골라내어 새로운 배열을 만든다.
    setTodoData(nextTodos); // 걸러진 새로운 배열로 todoData 상태를 업데이트하여 화면에서 삭제시킨다.
  };

  // 9. input 창에서 키보드를 누를 때 실행되는 엔터키 감지 함수
  const onKeyDown = (e) => {
    if (e.key === "Enter") onClick(); // 누른 키가 "Enter"라면 추가 함수(onClick)를 실행한다.
  };

  return (
    <>
      {/* 10. 사용자가 텍스트를 입력하는 input 입력창 */}
      <input
        type="text"
        value={inputText} // input의 값은 inputText 상태와 연결(동기화)된다.
        onChange={(e) => setInputText(e.target.value)} // 글자가 입력될 때마다 그 값을 읽어와 inputText 상태를 바꿔준다.
        onKeyDown={onKeyDown} // 키보드를 누를 때 onKeyDown 함수를 실행해 엔터 입력 여부를 확인한다.
      />

      {/* 11. 클릭 시 onClick 함수를 실행해 아이템을 추가하는 버튼 */}
      <button onClick={onClick}>추가</button>

      {/* 12. todoData 배열을 순회(map)하여 화면에 리스트 목록을 렌더링하는 구간 */}
      <ul>
        {todoData &&
          todoData.map((todo) => (
            // 각각의 li 태그에 고유한 key값(todo.id)을 부여하고, 더블클릭(onDoubleClick) 시 해당 id를 가진 아이템을 삭제(onRemove)한다.
            <li key={todo.id} onDoubleClick={() => onRemove(todo.id)}>
              {todo.text} {/* 투두의 텍스트 내용을 화면에 출력한다 */}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ToDoSample; // 외부에서 이 컴포넌트를 가져다 쓸 수 있도록 내보낸다.
