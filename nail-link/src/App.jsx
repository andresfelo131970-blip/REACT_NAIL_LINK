import { Routes, Route } from "react-router-dom";
import Registro from "./pages/Registro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />
      <Route 
      path="/registro" 
      element={<Registro />} />

      <Route
      path="/dashboard"
      element={<Dashboard />}
      />
      
    </Routes>
  );
}

export default App;