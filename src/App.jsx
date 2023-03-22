import "./app.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
