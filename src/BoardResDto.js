const BoardResDto = ({ post }) => {
  return (
    <>
      <h3>제목: {post.title}</h3>
      <p>내용: {post.content}</p>
      <p>작성자: {post.name}</p>
      <p>작성일: {post.regdate}</p>
    </>
  );
};

export default BoardResDto;
