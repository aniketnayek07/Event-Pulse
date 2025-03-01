import QRCODE from "../image/QRCODE.png";
import AnalyticsDashboard from "../image/AnalyticsDashboard.png";
import AutomatedCertificate from "../image/AutomatedCertificate.png";
import RealTimeMonitoring from "../image/RealTimeMonitoring.png";
import SocialSharing from "../image/SocialSharing.png";

const features = [
  {
    url: QRCODE,
    title: "QR CODE ATTENDANCE",
    content:
      "QR code attendance tracking automates event check-ins by allowing attendees to scan a unique QR code using their smartphones. This ensures instant verification, real-time entry logging, and eliminates manual errors, improving event efficiency and security.",
  },
  {
    url: RealTimeMonitoring,
    title: "REAL TIME MONITORING",
    content:
      "Real-time event monitoring tracks attendee activity, venue capacity, and engagement metrics instantly. It ensures seamless crowd management, prevents overbooking, and enhances event efficiency through live updates and automated alerts.",
  },
  {
    url: AutomatedCertificate,
    title: "AUTOMATED CERTIFICATE GENERATION",
    content:
      "Automated Certificate Generation streamlines the process of issuing certificates by automatically generating and distributing them based on event participation. It ensures accuracy, personalization, and efficiency by pulling attendee data, applying pre-designed templates, and delivering certificates via email or download links",
  },
  {
    url: SocialSharing,
    title: "SOCIAL SHARING FEATURES",
    content:
      "The Social Sharing feature in EventPulse allows attendees and organizers to easily share event details, highlights, and achievements on social media platforms. It includes one-click sharing options, automated event updates, and social engagement tracking, enhancing event visibility and participation.",
  },
  {
    url: AnalyticsDashboard,
    title: "ANALYTICS DASHBOARD",
    content:
      "An Analytics Dashboard is a visual interface that provides real-time insights into key metrics and data trends. It helps users track performance, monitor engagement, and make data-driven decisions through interactive charts, graphs, and reports.",
  },
];

export default features;
