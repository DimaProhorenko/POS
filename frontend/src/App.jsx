import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Main from "./components/layout/Main";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Main />}>
        <Route path="/dashboard" element={<h1>HOME</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
