"use strict";
// typescript 코드임 이 코드를 활용해서
// (가) ~ (아)를 완성한 후
// tsc -w  메뉴를 이용해
// javascript로 컴파일된 코드를 제출하라.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// API에서 게시글 데이터를 가져오는 함수
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        const posts /* (다)   */ = yield response.json();
        return posts;
    });
}
// 게시글 데이터를 렌더링하는 함수
function renderPosts(/* (라)   */ posts) {
    const postsContainer = document.getElementById("posts-container");
    if (!postsContainer)
        return;
    postsContainer.innerHTML = ""; // 이전 내용을 지우기
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;
        const bodyElement = document.createElement("p");
        bodyElement.textContent = post.body;
        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);
        postsContainer.appendChild(postElement);
    });
}
// 데이터를 가져와서 렌더링하는 메인 함수
/* (바)   */ function displayPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const posts = yield fetchPosts();
            renderPosts(posts);
        }
        catch (error) {
            console.error("Error fetching and rendering posts:", error);
        }
    });
}
// 함수 호출
displayPosts();
