import React, { useState } from "react";

function FruitItem() {
  // useState: 상태 관리 (버튼 누른 횟수)
  const [count, setCount] = useState(0);

  // 데이터 배열 준비
  const fruits = ["사과", "바나나", "포도"];

  return (
    <div style={{ padding: "20px" }}>
      <h1>리액트 핵심 개념 모음 예제</h1>

      {/* useState 활용 부위 */}
      <p>버튼을 누른 횟수: {count}번</p>
      <button onClick={() => setCount(count + 1)}>숫자 증가 (+1)</button>

      <hr />

      <h3>과일 목록 (배열 & map 활용)</h3>
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitItem;
