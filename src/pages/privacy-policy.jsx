import React from 'react';
import { Link } from 'react-router-dom';
import '../pages-style/privacy.css'; // Custom CSS for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="header-section">
          <h1 className="app-heading">Privacy Policy</h1>
          <p className="subtitle">Learn how we handle your information securely and transparently.</p>
        </div>
        <hr />
        <div className="content-section">
          <h2>1. Information We Collect</h2>
          <p>
            We only collect the following personal information when you contact us through our website:
          </p>
          <ul>
            <li>Name</li>
            <li>Email Address</li>
          </ul>
          <p>No other personal data is collected or required for using the website.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your inquiries or contact requests.</li>
            <li>Improve our services and website experience.</li>
          </ul>
          <p>
            We do not sell, trade, or share your personal information with third parties, except where required by law.
          </p>

          <h2>3. Payments</h2>
          <p>
            Our website does not collect or process any payment information. We do not require or store credit card, debit card, or any other payment details.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We use appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Advertisements</h2>
          <p>
            Our website displays advertisements through Google AdSense. Google may collect certain information through cookies or similar technologies to provide personalized ads based on your browsing activity. 
            Please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s Privacy Policy</a> for more information about how Google handles data collected for advertising.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Withdraw consent for us to use your personal data at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at 
            <a href="mailto:deepakjct654321@gmail.com"> deepakjct654321@gmail.com</a>.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at: 
            <Link to={'/contact'}> Click Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
