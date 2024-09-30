// typescript 코드임 이 코드를 활용해서
// (가) ~ (아)를 완성한 후
// tsc -w  메뉴를 이용해
// javascript로 컴파일된 코드를 제출하라.

interface Post {
  //  (가)  userid,id, title, body
  userId: number;
  id: number;
  title: string;
  body: string;
}

//유저를 만들기

// API에서 게시글 데이터를 가져오는 함수
async function fetchPosts(): Promise<Post[]> /* (나)   */ {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts: Post[] /* (다)   */ = await response.json();
  return posts;
}

// 게시글 데이터를 렌더링하는 함수
function renderPosts(/* (라)   */ posts: Post[]): void /* (마)   */ {
  const postsContainer = document.getElementById("posts-container");

  if (!postsContainer) return;

  postsContainer.innerHTML = ""; // 이전 내용을 지우기
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const userIdElement = document.createElement("p");
    userIdElement.textContent = `User ID: ${post.userId}`;

    const bodyElement = document.createElement("p");
    bodyElement.textContent = post.body;

    postElement.appendChild(titleElement);
    postElement.appendChild(userIdElement);
    postElement.appendChild(bodyElement);
    postsContainer.appendChild(postElement);
  });
}

// 데이터를 가져와서 렌더링하는 메인 함수
/* (바)   */ async function displayPosts(): Promise<void> /* (아)   */ {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    console.error("Error fetching and rendering posts:", error);
  }
}

// 함수 호출
displayPosts();
