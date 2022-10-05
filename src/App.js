import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/routes/Home.js";
//component is just return jsx
function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
