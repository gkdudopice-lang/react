import { useState } from "react"; // 상태관리 Hook

const DropDown = () => {
  // useState사용 이유: 상태가 바뀌면 화면을 다시 렌더링 하기 위해서 사용
  const [selectvalue, setSelectValue] = useState(""); // 선택된 값 상태관리

  return (
    <>
      <h2>드롭다운 예제</h2>
      <select
        value={selectvalue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="" disabled>
          {" "}
          과일을 선택하세요.
        </option>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="orange">오렌지</option>
        <option value="grape">포도</option>
        <option value="kiwi">키위</option>
      </select>
      <h3>선택된 과일: {selectvalue}</h3>
    </>
  );
};

export default DropDown;
