import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OrganizeEvent from "./pages/OrganizeEvent";
import EventForm from "./pages/EventForm";
import JoinEvent from "./pages/JoinEvent";
import ThankYou from "./pages/ThankYou";
import EventCard from "./pages/EventCard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Homepage />} />
        <Route path="/OrganizeEvent" element={<OrganizeEvent />} />
        <Route path="/OrganizeEvent/Eventform" element={<EventForm />} />
        <Route path="/JoinEvent" element={<JoinEvent />} />
        <Route path="/OrganizeEvent/Eventform/ThankYou" element={<ThankYou />} />

      </Routes>
    </Router>
  );
}

export default App;
