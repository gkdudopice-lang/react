// 운전하고 싶은 차량 선택하기: 라디오 버튼, 그랜저, 싼타페, 제네시스, 코나, 투싼
// 라디오 버튼은 여러개중에 단 한개를 선택 하는 것

import { useState } from "react";

const RadioBtn = () => {
  // 1. 선택된 차량을 저장할 상태 선언
  const [selectCar, setSelectCar] = useState("그랜저");
  // 2. 라디오 버튼이 바뀔 때 호출되는 핸들러 함수
  const handleChange = (event) => {
    setSelectCar(event.target.value);
  };

  return (
    <>
      <p>운전하고 싶은 차량을 선택하세요.</p>

      {/* 그랜저 라디오 버튼 */}
      <label htmlFor="grandeur">
        <input
          type="radio"
          name="carGroup"
          id="grandeur"
          value="그랜저"
          checked={selectCar === "그랜저"}
          onChange={handleChange}
        />
        그랜저
      </label>
      <br />

      {/* 싼타페 라디오 버튼 */}
      <label htmlFor="santafe">
        <input
          type="radio"
          name="carGroup"
          id="santafe"
          value="싼타페"
          checked={selectCar === "싼타페"}
          onChange={handleChange}
        />
        싼타페
      </label>
      <br />

      {/* 제네시스 라디오 버튼 */}
      <label htmlFor="genesis">
        <input
          type="radio"
          name="carGroup"
          id="genesis"
          value="제네시스"
          checked={selectCar === "제네시스"}
          onChange={handleChange}
        />
        제네시스
      </label>
      <br />

      {/* 코나 라디오 버튼 */}
      <label htmlFor="kona">
        <input
          type="radio"
          name="carGroup"
          id="kona"
          value="코나"
          checked={selectCar === "코나"}
          onChange={handleChange}
        />
        코나
      </label>
      <br />

      {/* 투싼 라디오 버튼 */}
      <label htmlFor="tucson">
        <input
          type="radio"
          name="carGroup"
          id="tucson"
          value="투싼"
          checked={selectCar === "투싼"}
          onChange={handleChange}
        />
        투싼
      </label>
      <br />

      <p>
        선택한 차량: <strong>{selectCar}</strong>
      </p>
    </>
  );
};

export default RadioBtn;
// 클릭 ➔ onChange 실행 ➔ useState로 값 변경 ➔ 컴포넌트 재실행 ➔ 화면 글자 변경 )이 바로 리액트가 화면을 움직이는 가장 핵심적인 메커니즘입니다.
