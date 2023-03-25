import "./app.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Authentication from "./pages/Authentication";
import PrivateRoutesLayout from "./layouts/PrivateRoutesLayout";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="*" element={<Error />} />

      {/* private routes */}
      <Route element={<PrivateRoutesLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
