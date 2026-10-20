import React, { useState } from "react"; // 1. 리액트 라이브러리와 상태 관리 훅인 useState를 불러온다.
import styled from "styled-components"; // 2. CSS-in-JS 스타일링을 위한 styled-components를 불러온다.
import Login from "./Login"; // 3. 자식 컴포넌트인 Login(로그인 화면) 파일을 가져온다.
import Signup from "./Signup"; // 4. 자식 컴포넌트인 Signup(회원가입 화면) 파일을 가져온다.
import Main from "./Main"; // 5. 자식 컴포넌트인 Main(메인 화면) 파일을 가져온다.

// 6. 화면 전체의 레이아웃을 잡아주는 스타일드 컴포넌트 (Flexbox를 이용해 화면 정중앙에 배치)
const Layout = styled.div`
  display: flex; /* 플렉스 박스 사용 */
  justify-content: center; /* 가로 기준 중앙 정렬 */
  align-items: center; /* 세로 기준 중앙 정렬 */
  min-height: 100vh; /* 화면 전체 높이의 최소 100%를 차지하게 설정 */
  background-color: #f5f5f5; /* 연한 회색 배경색 지정 */
`;

function App() {
  // 7. 현재 어떤 페이지를 보여줄지 관리하는 상태 (기본값은 "login"으로 설정하여 시작할 때 로그인 화면이 보이게 함)
  const [page, setPage] = useState("login");

  return (
    // 8. 중앙 정렬 레이아웃 박스 시작
    <Layout>
      {/* 9. 조건부 렌더링 (단축 평가 && 연산자 사용): 
          page 변수의 값에 따라 일치하는 컴포넌트만 화면에 렌더링하고, 
          각 자식 컴포넌트에게 페이지를 바꿀 수 있는 setPage 함수를 props로 전달한다. */}
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}
      {page === "main" && <Main setPage={setPage} />}
    </Layout>
  );
}

export default App; // 10. App 컴포넌트를 내보내어 index.js(최상위 진입점)에서 브라우저에 렌더링할 수 있게 한다.
