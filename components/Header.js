import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="new-transparent-header">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div className="logo-section">
            <a href="/">
              <img 
                src="/images.png" 
                alt="As-sa'adah Foundation" 
                className="logo"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="nav-links">
            <a href="/" className="nav-item active">Home</a>
            <a href="/about" className="nav-item">About Us</a>
            <div className="dropdown">
              <span className="nav-item">Programs ▾</span>
              <div className="dropdown-menu">
                <a href="/programs#education">Education Programs</a>
                <a href="/programs#healthcare">Healthcare</a>
                <a href="/programs#community">Community Development</a>
                <a href="/programs#emergency">Emergency Relief</a>
              </div>
            </div>
            <a href="/impact" className="nav-item">Our Impact</a>
            <a href="/volunteer" className="nav-item">Volunteer</a>
            <a href="/contact" className="nav-item">Contact Us</a>
          </nav>

          {/* Donate Button */}
          <div className="donate-section">
            <a href="/donate" className="donate-btn">
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="/" className="mobile-nav-item">Home</a>
          <a href="/about" className="mobile-nav-item">About Us</a>
          <a href="/programs#education" className="mobile-nav-item">Education Programs</a>
          <a href="/programs#healthcare" className="mobile-nav-item">Healthcare</a>
          <a href="/programs#community" className="mobile-nav-item">Community Development</a>
          <a href="/programs#emergency" className="mobile-nav-item">Emergency Relief</a>
          <a href="/impact" className="mobile-nav-item">Our Impact</a>
          <a href="/volunteer" className="mobile-nav-item">Volunteer</a>
          <a href="/contact" className="mobile-nav-item">Contact Us</a>
          <a href="/donate" className="mobile-donate-btn">Donate Now</a>
        </div>
      </div>

      <style jsx>{`
        .new-transparent-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: white;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .logo-section {
          flex-shrink: 0;
        }

        .logo {
          height: 60px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex: 1;
          justify-content: center;
        }

        .nav-item {
          color: black;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 25px;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          white-space: nowrap;
        }

        .nav-item.active {
          background: rgba(0, 0, 0, 0.15);
          color: black;
          font-weight: 600;
        }

        .dropdown {
          position: relative;
        }

        .dropdown .nav-item {
          cursor: pointer;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border-radius: 12px;
          padding: 10px 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          min-width: 200px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-menu a {
          display: block;
          padding: 10px 20px;
          color: black;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .donate-section {
          flex-shrink: 0;
        }

        .donate-btn {
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: black;
          cursor: pointer;
          padding: 8px;
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          padding: 20px;
          transform: translateY(-20px);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mobile-menu.open {
          display: block;
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-nav-item {
          display: block;
          padding: 12px 0;
          color: black;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: color 0.3s ease;
        }

        .mobile-nav-item:last-child {
          border-bottom: none;
        }

        .mobile-donate-btn {
          display: block;
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          padding: 12px 0;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          text-align: center;
          margin-top: 15px;
          transition: all 0.3s ease;
        }

        /* Mobile Styles */
        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .nav-content {
            height: 70px;
          }

          .logo {
            height: 50px;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 15px;
          }

          .nav-content {
            height: 65px;
          }

          .logo {
            height: 45px;
          }

          .donate-btn {
            padding: 10px 20px;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 10px;
          }

          .nav-content {
            height: 60px;
          }

          .logo {
            height: 40px;
          }

          .donate-btn {
            padding: 8px 16px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
}
