import React from "react"; // 1. 리액트 라이브러리를 불러온다.
import styled, { keyframes } from "styled-components"; // 2. 스타일드 컴포넌트와 CSS 애니메이션(keyframes)을 만들기 위한 도구를 불러온다.

// 3. 조건7: 3초 동안 투명도(opacity)를 0(안 보임)에서 1(완전 선명함)로 변화시키는 애니메이션 정의 (Fade-in 효과)
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// 4. 메인 화면 박스 전체를 감싸는 컨테이너 스타일 (너비 500px, 가운데 정렬, 흰색 배경, 그림자 효과)
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

// 5. 조건7: Welcome 메시지 스타일 (위에서 정의한 fadeIn 애니메이션을 3초 동안 실행하고 끝난 상태를 유지함)
const WelcomeMessage = styled.h1`
  animation: ${fadeIn} 3s ease-in-out forwards;
  color: #28a745; /* 초록색 텍스트 컬러 */
  font-size: 28px;
  margin-bottom: 20px;
`;

// 6. 로그아웃을 위한 빨간색 버튼 스타일
const Button = styled.button`
  padding: 10px 20px;
  background-color: #dc3545; /* 빨간색 배경 */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #c82333; /* 마우스 올렸을 때 더 진한 빨간색으로 변경 */
  }
`;

// 7. Main 컴포넌트 시작 (부모인 App으로부터 로그인 페이지로 돌아갈 수 있는 setPage 함수를 props로 전달받음)
const Main = ({ setPage }) => {
  return (
    <Container>
      {/* 조건7: 접속 시 3초에 걸쳐 서서히 나타나는 Welcome 메시지 */}
      <WelcomeMessage>Welcome!</WelcomeMessage>
      <p style={{ color: "#666" }}>성공적으로 접속되었습니다.</p>

      {/* 8. Log Out 버튼을 누르면 setPage를 통해 다시 로그인 화면("login")으로 전환 */}
      <Button onClick={() => setPage("login")}>Log Out</Button>
    </Container>
  );
};

export default Main; // 9. 다른 파일(App.js)에서 불러다 쓸 수 있도록 컴포넌트를 내보낸다.
