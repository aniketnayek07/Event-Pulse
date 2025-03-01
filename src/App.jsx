import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Login" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
