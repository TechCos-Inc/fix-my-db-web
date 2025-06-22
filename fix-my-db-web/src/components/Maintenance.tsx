import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/maintenance.json';
import logo from '../assets/logo.png';
import './Maintenance.css';
import { APP_NAME, TAGLINE, SUPPORT_EMAIL, COPYRIGHT_YEAR } from '../constants';

const Maintenance: React.FC = () => {
  return (
    <div className="maintenance-container">
      <header className="maintenance-header">
        <img src={logo} alt={`${APP_NAME} Logo`} className="logo" />
        <h1>{APP_NAME}</h1>
        <p className="tagline">{TAGLINE}</p>
      </header>

      <div className="maintenance-animation">
        <Lottie animationData={animationData} className="lottie" />
      </div>

      <main className="maintenance-text">
        <h2>We're Under Scheduled Maintenance</h2>
        <p>
          {APP_NAME} is currently undergoing scheduled maintenance to bring you a faster,
          more reliable, and secure experience. We're fine-tuning our systems to ensure
          top-tier database repair, optimization, and diagnostics at your fingertips.
        </p>
        <p className="highlight">
          We appreciate your patience and understanding. Please check back shortly —
          performance is our top priority.
        </p>
        <p>
          Need assistance? Reach out to us at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="contact-link">
            {SUPPORT_EMAIL}
          </a>
        </p>
      </main>

      <footer className="footer">
        &copy; {COPYRIGHT_YEAR} <strong>{APP_NAME}</strong>. All rights reserved.
      </footer>
    </div>
  );
};

export default Maintenance;
