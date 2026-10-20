import React from "react"; // 1. 리액트 라이브러리를 불러온다.
import styled from "styled-components"; // 2. 컴포넌트별로 CSS 스타일을 작성하기 위해 styled-components를 불러온다.

// 3. 회원가입 박스 전체를 감싸는 컨테이너 스타일 (너비 500px, 가운데 정렬, 흰색 배경, 그림자 효과)
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

// 4. 회원가입 제목(Sign Up) 스타일
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

// 6. 이메일 및 비밀번호 입력창 스타일
const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

// 7. 회원가입 제출용 파란색 버튼 스타일
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

// 8. 하단에 계정 유무를 묻는 텍스트 스타일 (로그인 페이지로 이동하는 링크 포함)
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

// 9. Signup 컴포넌트 시작 (부모인 App으로부터 페이지 전환을 위한 setPage 함수를 props로 전달받음)
const Signup = ({ setPage }) => {
  // 10. Sign Up 버튼을 눌렀을 때 실행되는 함수
  const handleSignupSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 기본 동작을 막는다.

    alert("가입완료"); // "가입완료" 알림창을 띄운다.
    setPage("login"); // 알림창 확인 후 자동으로 로그인 화면("login")으로 현재 창을 전환한다.
  };

  return (
    <Container>
      <Title>Sign Up</Title>

      {/* 11. 폼 제출 시 handleSignupSubmit 함수가 실행되도록 연결 */}
      <Form onSubmit={handleSignupSubmit}>
        {/* 이메일 입력창 (필수 입력: required) */}
        <Input type="email" placeholder="Email Address" required />
        {/* 비밀번호 입력창 (필수 입력: required) */}
        <Input type="password" placeholder="Password" required />

        {/* 회원가입 제출 버튼 */}
        <Button type="submit">Sign Up</Button>
      </Form>

      {/* 조건2: 'Log in' 글자를 누르면 setPage를 통해 로그인 화면("login")으로 현재 창 전환 */}
      <ToggleText>
        이미 계정이 있으신가요?
        <span onClick={() => setPage("login")}>Log in</span>
      </ToggleText>
    </Container>
  );
};

export default Signup; // 12. 다른 파일(App.js)에서 불러다 쓸 수 있도록 컴포넌트를 내보낸다.
