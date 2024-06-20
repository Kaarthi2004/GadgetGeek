import React from 'react';
import './footer-style.css'; // Custom CSS for additional styling
import { Tooltip } from 'react-tooltip';

function Footer() {
  return (
    <footer className="text-center">
      <a
        className="up-arrow"
        href="#"
        data-tooltip-id="toTopTooltip"
        data-tooltip-content="TO TOP"
      >
        <span className="glyphicon glyphicon-chevron-up"></span>
      </a><br /><br />
      <p>The Website made by <a
        href="https://github.com/Kaarthi2004"
        data-tooltip-id="githubTooltip"
        data-tooltip-content="Visit my GitHub"
      >
        RangaKaarthi
      </a></p>
      <Tooltip id="toTopTooltip" />
      <Tooltip id="githubTooltip" />
    </footer>
  );
}

export default Footer;
