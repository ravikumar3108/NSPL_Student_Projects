import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Placeholder from "./pages/Placeholder";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Auth/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Signup />}
        />

        <Route element={<Layout />}>
          {/* Main page */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />
          {/* Default */}
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;