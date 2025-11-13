export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-main">
            <div className="footer-logo">
              <img src="/logo.png" alt="As-sa'adah Foundation" />
              <h3>As-sa'adah Foundation</h3>
            </div>
            <p className="footer-description">
              Comprehensive Islamic welfare organization dedicated to serving humanity through 
              education, healthcare, poverty alleviation, and spiritual development based on 
              Islamic principles of compassion and justice.
            </p>
            <div className="footer-mission">
              <p><strong>"And whoever saves a life, it is as if he has saved all of mankind."</strong></p>
              <span>- Quran 5:32</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Our Programs</h4>
            <ul>
              <li><a href="/programs">Education & Religious Studies</a></li>
              <li><a href="/programs">Healthcare Services</a></li>
              <li><a href="/programs">Poverty Alleviation</a></li>
              <li><a href="/programs">Emergency Relief</a></li>
              <li><a href="/volunteer">Volunteer</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li><a href="/donate">Give Zakat & Sadaqah</a></li>
              <li><a href="/donate">Ramadan Donations</a></li>
              <li><a href="/volunteer">Join Our Mission</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4>Contact Information</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-details">
                  <strong>Email</strong>
                  <p>assaadahcontact525@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-details">
                  <strong>Phone</strong>
                  <p>+92 312 2221280</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h5>Follow Our Journey</h5>
              <div className="social-links">
                <a href="https://www.facebook.com/assadahofficial123" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/asaadaoffical123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/as-saadah-b605b2357/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@assadahofficial123" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 As-sa'adah Foundation. All rights reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/transparency">Transparency Report</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(
            135deg,
            rgba(26, 71, 42, 0.95),
            rgba(22, 54, 35, 0.1)
          ),
          url('/footer image.jpg') center center / cover no-repeat;
          color: white;
          position: relative;
          padding: 80px 0 0;
          margin-top: 0;
        }

        .footer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(26, 71, 42, 0.9) 0%,
            rgba(22, 54, 35, 0.95) 50%,
            rgba(20, 50, 30, 0.98) 100%
          );
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-main {
          padding-right: 2rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .footer-logo img {
          height: 80px;
          width: auto;
          filter: brightness(0) invert(1);
        }

        .footer-logo h3 {
          color: white;
          font-size: 1.6rem;
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
          margin: 0;
        }

        .footer-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }

        .footer-mission {
          background: rgba(26, 71, 42, 0.2);
          padding: 1.5rem;
          border-radius: 12px;
          border-left: 4px solid var(--primary-color);
          font-style: italic;
        }

        .footer-mission p {
          color: white;
          font-size: 1rem;
          margin: 0 0 0.5rem 0;
          font-weight: 500;
        }

        .footer-mission span {
          color: rgba(74, 222, 128, 0.9);
          font-size: 0.9rem;
        }

        .footer-section h4 {
          color: white;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          position: relative;
        }

        .footer-section h4::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 2px;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section li {
          margin-bottom: 0.8rem;
        }

        .footer-section a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: all 0.3s ease;
          display: block;
          padding: 0.5rem 0;
          font-weight: 400;
          font-size: 1rem;
        }

        .footer-section a:hover {
          color: white;
          transform: translateX(5px);
        }

        .footer-contact .contact-info {
          margin-bottom: 2rem;
        }

        .contact-item {
          margin-bottom: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 8px;
          border-left: 3px solid #1a472a;
        }

        .contact-details strong {
          color: white;
          display: block;
          font-weight: 600;
          margin-bottom: 0.3rem;
          font-family: 'Montserrat', sans-serif;
        }

        .contact-details p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-size: 0.95rem;
        }

        .social-section h5 {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          justify-content: flex-start;
          align-items: center;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          flex-shrink: 0;
          text-align: center;
          position: relative;
        }

        .social-link:hover {
          background: #1a472a;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(26, 71, 42, 0.4);
          border-color: white;
        }

        .social-link svg {
          width: 20px;
          height: 20px;
          fill: white;
          flex-shrink: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }


        .footer-bottom {
          border-top: 1px solid rgba(26, 71, 42, 0.3);
          padding: 2rem 0;
          background: rgba(0, 0, 0, 0.2);
          margin: 0 -20px;
          padding-left: 20px;
          padding-right: 20px;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: white;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-main {
            grid-column: span 2;
            padding-right: 0;
          }

        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 0;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .footer-main {
            grid-column: span 1;
          }

          .footer-logo {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .footer-logo h3 {
            font-size: 1.4rem;
          }


          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .footer-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 40px 0 0;
          }

          .footer-content {
            gap: 2rem;
          }

          .footer-logo img {
            height: 55px;
          }

          .footer-logo h3 {
            font-size: 1.3rem;
          }

          .footer-section h4 {
            font-size: 1.2rem;
          }


          .social-links {
            justify-content: center;
          }

          .social-link {
            width: 45px;
            height: 45px;
          }

          .social-link svg {
            width: 20px;
            height: 20px;
          }

          .contact-item {
            text-align: center;
          }

          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}
