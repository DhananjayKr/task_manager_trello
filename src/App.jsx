import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./assets/components/Login";
import Signup from "./assets/components/Signup";
import Dashboard from "./assets/components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
