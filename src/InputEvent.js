// 이름
// 비밀번호
// 나이
// 주소
// 이메일을 입력받기
// 전부 입력 완료 되었을 때 확인 버튼 누르면 입력 받은 결과를 출력하기

import { useState } from "react";

const InputEvent = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [age, setAge] = useState("");
  const [addr, setAddr] = useState("");
  const [email, setEmail] = useState("");

  const [result, setResult] = useState(null);

  const handleConfirm = () => {
    // 👈 빈 칸이 하나라도 있는지 체크하는 유효성 검사 추가!
    if (!name || !pwd || !age || !addr || !email) {
      alert("모든 정보를 입력해 주세요!");
      return;
    }
    setResult({ name, pwd, age, addr, email });
  };

  return (
    <>
      <p>입력 연습</p>
      <div>
        <input
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="비밀번호 입력"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="나이 입력"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="주소 입력"
          value={addr}
          onChange={(e) => setAddr(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="메일 입력"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button onClick={handleConfirm}>확인</button>

      {result && (
        <div>
          <h3>입력 결과 출력</h3>
          <p>이름: {result.name}</p>
          <p>비밀번호: {result.pwd}</p>
          <p>나이: {result.age}</p>
          <p>주소: {result.addr}</p>
          <p>이메일: {result.email}</p>
        </div>
      )}
    </>
  );
};

export default InputEvent;
