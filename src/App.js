import "./App.css";
import BoardResDto from "./BoardResDto";

const post = [
  {
    id: 1,
    title: "게시글 제목1",
    content: "게시글 내용1",
    name: "이하영",
    regdate: "2026-10-15 pm 3:12",
  },
  {
    id: 2,
    title: "게시글 제목2",
    content: "게시글 내용2",
    name: "이소율",
    regdate: "2026-10-15 pm 3:14",
  },
  {
    id: 3,
    title: "게시글 제목3",
    content: "게시글 내용3",
    name: "신용운",
    regdate: "2026-10-15 pm 3:16",
  },
  {
    id: 4,
    title: "게시글 제목4",
    content: "게시글 내용4",
    name: "손서희",
    regdate: "2026-10-15 pm 3:00",
  },
  {
    id: 5,
    title: "게시글 제목5",
    content: "게시글 내용5",
    name: "이시온",
    regdate: "2026-10-15 pm 3:20",
  },
  {
    id: 6,
    title: "게시글 제목6",
    content: "게시글 내용6",
    name: "이신영",
    regdate: "2026-10-15 pm 3:22",
  },
  {
    id: 7,
    title: "게시글 제목7",
    content: "게시글 내용7",
    name: "방예진",
    regdate: "2026-10-15 pm 3:24",
  },
  {
    id: 8,
    title: "게시글 제목8",
    content: "게시글 내용8",
    name: "한혜진",
    regdate: "2026-10-15 pm 3:26",
  },
  {
    id: 9,
    title: "게시글 제목9",
    content: "게시글 내용9",
    name: "정수리",
    regdate: "2026-10-15 pm 3:28",
  },
  {
    id: 10,
    title: "게시글 제목10",
    content: "게시글 내용10",
    name: "이선영",
    regdate: "2026-10-15 pm 3:30",
  },
];

function App() {
  return (
    // 화면을 그려주는 구간
    <>{post && post.map((e) => <BoardResDto key={e.id} post={e} />)}</>
  );
}

export default App;
