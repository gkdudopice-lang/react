import { useState } from "react";

const Count = () => {
  //const [number, setNumber] = useState(0);
  const [flag, setFlag] = useState(false);
  let number = 0;

  const numInc = () => {
    number++;
    console.log(number);
    setFlag(!flag);
  };

  const numDec = () => {
    number--;
    console.log(number);
    setFlag(!flag);
  };

  return (
    <>
      <h3>현재 카운터: {number}</h3>
      <button onClick={numInc}>증가</button> {/*() => setNumber(number + 1)*/}
      <button onClick={numDec}>감소</button>
    </>
  );
};

export default Count; // 3가지 경우 let = 값 바뀌는데 랜더링 안됨, useState = 값도 바뀌고 랜더링도 됨, useRef = 값 바뀌고 랜더링 안됨(리렌더링 시 값 유지됨)

/* 💡 강사님이 이 코드로 알려주고 싶었던 3가지 결론
이 코드를 통해 강사님은 다음 3가지 개념을 증명하고 싶으셨던 겁니다.

let의 한계: 값은 바뀌고 콘솔에도 찍히지만, 리렌더링이 일어나는 순간 값이 초기화되어 버리고 화면에도 반영되지 않는다.

useState의 필요성: 값이 바뀌어도 초기화되지 않고 기억되면서, 동시에 화면(렌더링)까지 싹 바꿔주고 싶을 때는 무조건 useState를 써야 한다.

useRef의 등장 배경: 만약 "값은 리렌더링되어도 초기화되지 않고 계속 유지(기억)되어야 하는데, 화면을 다시 그릴(렌더링할) 필요는 없다"면 let처럼 초기화되지 않는 useRef를 써야 한다!*/
