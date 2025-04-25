import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OrganizeEvent from "./pages/OrganizeEvent";
import EventForm from "./pages/EventForm"
import HackathonForm from "./pages/HackathonForm"
import JoinEvent from "./pages/JoinEvent";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Homepage />} />
        <Route path="/OrganizeEvent" element={<OrganizeEvent />} />
        <Route path="/OrganizeEvent/Eventform" element={<EventForm />} />
        <Route path="/OrganizeEvent/Hackathonform" element={<HackathonForm />} />
        <Route path="/JoinEvent" element={<JoinEvent />} />    
      </Routes>
    </Router>
  );
}

export default App;
