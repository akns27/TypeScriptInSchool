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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//유저를 만들기
// API에서 게시글 데이터를 가져오는 함수
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch posts");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts = _a.sent();
                    return [2 /*return*/, posts];
            }
        });
    });
}
// 게시글 데이터를 렌더링하는 함수
function renderPosts(/* (라)   */ posts) {
    var postsContainer = document.getElementById("posts-container");
    if (!postsContainer)
        return;
    postsContainer.innerHTML = ""; // 이전 내용을 지우기
    posts.forEach(function (post) {
        var postElement = document.createElement("div");
        postElement.className = "post";
        var titleElement = document.createElement("h2");
        titleElement.textContent = post.title;
        var userIdElement = document.createElement("p");
        userIdElement.textContent = "User ID: ".concat(post.userId);
        var bodyElement = document.createElement("p");
        bodyElement.textContent = post.body;
        postElement.appendChild(titleElement);
        postElement.appendChild(userIdElement);
        postElement.appendChild(bodyElement);
        postsContainer.appendChild(postElement);
    });
}
// 데이터를 가져와서 렌더링하는 메인 함수
/* (바)   */ function displayPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var posts, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchPosts()];
                case 1:
                    posts = _a.sent();
                    renderPosts(posts);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error fetching and rendering posts:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// 함수 호출
displayPosts();
