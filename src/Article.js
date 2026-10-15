// 기사제목
// 내용
// 작성일
// 작성자
// props로 전달 받아 표시 하기
// 기본 값 설정 사용
// 구조분해 사용

const Article = ({ data }) => {
  return (
    <>
      <p>기사 페이지 입니다.</p>
      <h2>제목: {data.title}</h2>
      <p>내용: {data.content}</p>
      <p>작성일: {data.date}</p>
      <p>작성자: {data.author}</p>
    </>
  );
};

export default Article;
