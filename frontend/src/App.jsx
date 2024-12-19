import { Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Main from "./components/layout/Main";
import CreateUser from "./pages/CreateUser";
import ProtectedRoute from "./routes/ProtectedRoute";
import CreateProduct from "./pages/CreateProduct";
import ViewProduct from "./pages/ViewProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Main />}>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Link to="/products/create" className="btn btn-primary">
                  Create Product
                </Link>
              </ProtectedRoute>
            }
          />
          <Route
            path="create-user"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <CreateUser />
              </ProtectedRoute>
            }
          />

          <Route path="products">
            <Route
              path="create"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <CreateProduct />
                </ProtectedRoute>
              }
            />
            <Route path=":id" element={<ViewProduct />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
