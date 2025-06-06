import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { FormProvider } from "./context/FormContext.jsx";
import { EventProvider } from "./context/EventContext.jsx";
import { HackathonProvider } from "./context/HackathonContext.jsx";
import App from "./App.jsx";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/home">
      <EventProvider>
        <HackathonProvider>
          <FormProvider>
            <App />
          </FormProvider>
        </HackathonProvider>
      </EventProvider>
    </ClerkProvider>
  </StrictMode>
);
