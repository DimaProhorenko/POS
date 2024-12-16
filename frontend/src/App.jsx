import { Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Main from "./components/layout/Main";
import CreateUser from "./pages/CreateUser";
import ProtectedRoute from "./routes/ProtectedRoute";
import CreateProduct from "./pages/CreateProduct";

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
                <Link to="/create-product" className="btn btn-primary">
                  Create Product
                </Link>
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
          <Route
            path="/create-product"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <CreateProduct />
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
