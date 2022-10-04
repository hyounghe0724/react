import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />, document.getElementById("root"));

// 1. props나 state가 업데이트
// 2. 컴포넌트 리렌더링
// 3. 이전 이펙트 클린업
// 3-1. 컴포넌트가 파괴될 경우 새로운 이펙트가 없어지기때문에
// 3-2. return 함수로 파괴될때의 콜백 함수를 설정(자유)
// 4. 새로운 이펙트 실행
// 출처: https://simsimjae.tistory.com/401 [104%:티스토리]
