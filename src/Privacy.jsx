import "./Privacy.css";

export default function Privacy() {
  return (
    <div className="privacy">
      <div className="privacy-container">

        <h1>Privacy Policy</h1>
        <p className="updated">Last Updated: 2026</p>

        <p>
          Welcome to Help App ("we", "our", or "us"). Your privacy and safety are extremely important to us.
          This Privacy Policy explains how we collect, use, store, and protect your information when you use our mobile application.
        </p>

        <h2>1. What Help App Does</h2>
        <p>
          Help App is a personal safety and guardian alert application designed to help users stay safe and notify trusted contacts in emergency situations.
        </p>
        <ul>
          <li>Set a home or safe location</li>
          <li>Monitor real-time location</li>
          <li>Track location in the background</li>
          <li>Detect when a user leaves a safe zone</li>
          <li>Notify selected guardians</li>
          <li>Send emergency alerts</li>
          <li>Provide OTP-based authentication</li>
        </ul>

        <h2>2. Information We Collect</h2>

        <h3>Account Information</h3>
        <p>
          When you create an account we may collect phone number, email address, OTP verification data, and basic profile information.
        </p>

        <h3>Location Data</h3>
        <p>
          Help App collects GPS location including background location (if permission is granted), safe zone coordinates, and distance calculations.
          This is required for safety monitoring, guardian alerts, and emergency notifications.
        </p>

        <h3>Guardian Information</h3>
        <p>
          When adding a guardian we may collect guardian name, contact information, and account identifiers to enable safety alerts.
        </p>

        <h2>3. How We Store Your Data</h2>
        <p>
          We use secure cloud infrastructure and encrypted communication. Sensitive information is transmitted via HTTPS and stored securely.
        </p>

        <h2>4. Background Location Usage</h2>
        <p>
          Help App may collect location data even when the app is closed to detect when users leave a safe zone and to notify guardians during emergencies.
          Location data is never used for advertising or profiling.
        </p>

        <h2>5. How We Use Your Information</h2>
        <ul>
          <li>Account authentication</li>
          <li>Guardian linking</li>
          <li>Safety monitoring</li>
          <li>Emergency alerts</li>
          <li>System performance improvements</li>
        </ul>
        <p>We do not sell or share personal data with advertisers.</p>

        <h2>6. Data Sharing</h2>
        <p>
          Limited data may be shared with guardians you link, or when required by law or to protect user safety.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          Data is retained while your account is active. You may request account deletion at any time.
        </p>

        <h2>8. User Rights</h2>
        <ul>
          <li>Access your data</li>
          <li>Update profile information</li>
          <li>Remove guardians</li>
          <li>Disable location permissions</li>
          <li>Request account deletion</li>
        </ul>

        <h2>9. Children's Privacy</h2>
        <p>
          Help App is not intended for children under 13. We do not knowingly collect personal data from children.
        </p>

        <h2>10. Security</h2>
        <p>
          We implement encrypted communication, secure authentication, OTP verification, and protected cloud infrastructure.
        </p>

        <h2>11. Third-Party Services</h2>
        <p>
          The app may use secure third-party services such as authentication, cloud databases, location services, and push notifications.
        </p>

        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be reflected by updating the "Last Updated" date.
        </p>

        <h2>13. Contact</h2>
        <p>If you have questions about this policy please contact:</p>
        <p><strong>Email:</strong> support@yugamai.com</p>

      </div>
    </div>
  );
}