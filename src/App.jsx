import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OrganizeEvent from "./pages/OrganizeEvent";
import EventForm from "./pages/EventForm";
import JoinEvent from "./pages/JoinEvent";
import ThankYou from "./pages/ThankYou";
import HackathonForm from "./pages/HackathonForm";
import Events from "./pages/Events";
import Hackathon from "./pages/Hackathon";
import ApplyHackathon from "./pages/ApplyHackathon";
import Login from "./pages/Login";
import Summary from "./pages/Summary";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import SocialSharing from "./pages/SocialSharing";
import QRCode from "./pages/QRCode";
import RegisteredThanks from "./pages/RegisteredThanks";
import HackathonInfo from "./pages/HackathonInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/QRCode" element={<QRCode />} />
        <Route path="/login" element={<Login />} />
        <Route path="/OrganizeEvent" element={<OrganizeEvent />} />
        <Route path="/OrganizeEvent/Eventform" element={<EventForm />} />
        <Route path="/ApplyHackathon/Summary/:eventId" element={<Summary />} />
        <Route path="/Socials" element={<SocialSharing />} />
        <Route path="/Registered" element={<RegisteredThanks />} />
        <Route path="/HackathonInfo/:eventId" element={<HackathonInfo />} />
        <Route
          path="/OrganizeEvent/Hackathonform"
          element={<HackathonForm />}
        />
        <Route path="/JoinEvent" element={<JoinEvent />} />
        <Route
          path="/OrganizeEvent/Eventform/ThankYou"
          element={<ThankYou />}
        />
        <Route
          path="/OrganizeEvent/Hackathonform/ThankYou"
          element={<ThankYou />}
        />
        <Route path="/Events" element={<Events />} />
        <Route path="/Hackathon" element={<Hackathon />} />
        <Route path="/ApplyHackathon" element={<ApplyHackathon />} />
        <Route
          path="/OrganizeEvent"
          element={
            <>
              <SignedIn>
                <OrganizeEvent />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn redirectUrl="/OrganizeEvent" />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/OrganizeEvent/Eventform"
          element={
            <>
              <SignedIn>
                <EventForm />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn redirectUrl="/OrganizeEvent/Eventform" />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/OrganizeEvent/Hackathonform"
          element={
            <>
              <SignedIn>
                <HackathonForm />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn redirectUrl="/OrganizeEvent/Hackathonform" />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/JoinEvent"
          element={
            <>
              <SignedIn>
                <JoinEvent />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn redirectUrl="/JoinEvent" />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/ApplyHackathon"
          element={
            <>
              <SignedIn>
                <ApplyHackathon />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn redirectUrl="/ApplyHackathon" />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/OrganizeEvent/Eventform/ThankYou"
          element={
            <>
              <SignedIn>
                <ThankYou />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/OrganizeEvent/Hackathonform/ThankYou"
          element={
            <>
              <SignedIn>
                <ThankYou />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
