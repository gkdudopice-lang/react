import React, { useState } from "react"; // 1. 리액트 라이브러리와 사용자 입력을 상태로 관리할 useState 훅을 불러온다.
import styled from "styled-components"; // 2. 컴포넌트별로 CSS 스타일을 작성하기 위해 styled-components를 불러온다.

// 3. 로그인 박스 전체를 감싸는 컨테이너 스타일 (너비 500px, 가운데 정렬, 흰색 배경, 그림자 효과)
const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  text-align: center;
`;

// 4. 로그인 제목(Log In) 스타일
const Title = styled.h2`
  margin-bottom: 24px;
  color: #333;
`;

// 5. 입력창들을 세로로 정렬해 주는 폼 태그 스타일
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 6. 이메일과 비밀번호 입력창 스타일
const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

// 7. 기본 파란색 버튼 스타일 (Log in 버튼용)
const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3; /* 마우스 올렸을 때 진한 파란색으로 변경 */
  }
`;

// 8. 기본 Button 스타일을 상속(Inheritance)받아서 배경색만 회색으로 바꾼 Get started 버튼 스타일
const SecondaryButton = styled(Button)`
  background-color: #6c757d;
  margin-top: 10px;
  width: 100%;
  &:hover {
    background-color: #5a6268;
  }
`;

// 9. 하단에 계정 유무를 묻는 텍스트 스타일 (클릭 가능한 span 태그 포함)
const ToggleText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #666;
  span {
    color: #007bff;
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
    margin-left: 5px;
  }
`;

// 10. Login 컴포넌트 시작 (부모인 App으로부터 페이지 전환을 위한 setPage 함수를 props로 전달받음)
const Login = ({ setPage }) => {
  // 11. 사용자가 입력하는 email과 password를 실시간으로 저장하고 관리하는 상태 정의
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 12. Log in 버튼을 눌렀을 때 실행되는 함수 (조건5 & 조건6 처리)
  const handleLogin = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 기본 동작을 막는다.

    // 조건6: 이메일이나 비밀번호가 비어있다면 함수를 여기서 멈추고 이동하지 않는다.
    if (!email.trim() || !password.trim()) {
      return;
    }

    // 조건5: 이메일과 비밀번호가 모두 입력되었다면 초기 화면(main)으로 페이지를 전환한다.
    setPage("main");
  };

  return (
    <Container>
      <Title>Log In</Title>

      {/* 13. 폼 제출 시 handleLogin 함수가 실행되도록 연결 */}
      <Form onSubmit={handleLogin}>
        {/* 이메일 입력창: 값이 바뀔 때마다 setEmail을 통해 email 상태를 업데이트 */}
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* 비밀번호 입력창: 값이 바뀔 때마다 setPassword를 통해 password 상태를 업데이트 */}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 조건5: 로그인 제출 버튼 */}
        <Button type="submit">Log in</Button>
      </Form>

      {/* 조건6: 클릭했을 때 별도의 기능이 없는 Get started 버튼 */}
      <SecondaryButton type="button" onClick={() => {}}>
        Get started
      </SecondaryButton>

      {/* 조건1: 'Sign up' 글자를 누르면 setPage를 통해 회원가입 화면("signup")으로 현재 창 전환 */}
      <ToggleText>
        계정이 없으신가요?
        <span onClick={() => setPage("signup")}>Sign up</span>
      </ToggleText>
    </Container>
  );
};

export default Login; // 14. 다른 파일(App.js)에서 불러다 쓸 수 있도록 내보낸다.
