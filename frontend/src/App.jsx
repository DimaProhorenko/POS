import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Main from "./components/layout/Main";
import CreateUser from "./pages/CreateUser";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Main />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <h1>HOME</h1>
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-user"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <CreateUser />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
