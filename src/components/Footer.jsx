import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import QRCode from "react-qr-code";

function Footer() {
  return (
    <div className="footer-content">
      <div className="social-links">
        <div className="footer-mid-text">
          <h3>Get connected</h3>
        </div>
        <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
        <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
        <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
        <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
      </div>
      <div className="footer-mid-text">
        <p className="footer-text-l">Created by Naindeep</p>
        <p className="footer-text-l">Made with ❤️ by the Tech Tribe</p>
        <p>Note: This project is made for educational purposes only.</p>
      </div>

      <div className="qr-div">
        <QRCode
          value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="qr-code"
          bgColor="transparent"
          fgColor="white"
        />
        <h4>Watch this React Playlist!</h4>
      </div>
    </div>
  );
}

export default Footer;
