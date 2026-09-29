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
        <Route element={<Layout />}>
          {/* Main page */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Future pages */}
          <Route
            path="/analytics"
            element={<Login />}
          />

          <Route
            path="/finance"
            element={<Signup />}
          />

          <Route
            path="/data"
            element={<Profile />}
          />

          <Route
            path="/charts"
            element={<Placeholder />}
          />

          <Route
            path="/courses"
            element={<Placeholder />}
          />

          <Route
            path="/members"
            element={<Placeholder />}
          />

          <Route
            path="/settings"
            element={<Placeholder />}
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