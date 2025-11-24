import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const headerHeight = 80; // Adjust based on your header height
      const targetPosition = target.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

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
            <a href="#about" className="nav-item" onClick={(e) => handleAnchorClick(e, 'about')}>About Us</a>
            <a href="#leadership" className="nav-item" onClick={(e) => handleAnchorClick(e, 'leadership')}>Leadership</a>
            <a href="#impact" className="nav-item" onClick={(e) => handleAnchorClick(e, 'impact')}>Our Impact</a>
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
          <a href="#about" className="mobile-nav-item" onClick={(e) => handleAnchorClick(e, 'about')}>About Us</a>
          <a href="#leadership" className="mobile-nav-item" onClick={(e) => handleAnchorClick(e, 'leadership')}>Leadership</a>
          <a href="#impact" className="mobile-nav-item" onClick={(e) => handleAnchorClick(e, 'impact')}>Our Impact</a>
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

        .logo:hover {
          transform: scale(1.05);
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

        .nav-item:hover {
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
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

        .dropdown-menu a:hover {
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          transform: translateX(5px);
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

        .donate-btn:hover {
          background: linear-gradient(135deg, #22543d, #2f855a);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(26, 71, 42, 0.4);
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
          transition: all 0.3s ease;
        }

        .mobile-nav-item:hover {
          color: #1a472a;
          padding-left: 10px;
          background: linear-gradient(90deg, rgba(26, 71, 42, 0.1), transparent);
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

        .mobile-donate-btn:hover {
          background: linear-gradient(135deg, #22543d, #2f855a);
          transform: scale(1.02);
          box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
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
