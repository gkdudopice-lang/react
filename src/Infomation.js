import { useState, useEffect } from "react"; // 상태관리. 생명주기 관리

// 이름, 닉네임, 주소를 입력받아출력해보기: useState 사용
// useEffect가 언제 호출되는지 확인해보기: 같이 하기

const Infomation = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [addr, setAddr] = useState("");

  useEffect(() => {
    console.log("렌더링 완료 이후 호출!!!");
    console.log({ name, id, addr });
  }, [name, addr, id]);

  return (
    <>
      <label>
        이름 <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>{" "}
      <br />
      <label>
        닉네임 <input value={id} onChange={(e) => setId(e.target.value)} />
      </label>{" "}
      <br />
      <label>
        주소 <input value={addr} onChange={(e) => setAddr(e.target.value)} />
      </label>{" "}
      <br />
      <div>
        <p>이름: {name}</p>
        <p>닉네임: {id}</p>
        <p>주소: {addr}</p>
      </div>
    </>
  );
};
export default Infomation;
