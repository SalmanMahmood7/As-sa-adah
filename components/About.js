import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="about-section-floating">
      <div className="about-container">
        <div className="about-floating-card">
          {/* Background Logo */}
          <div className="about-background-logo">
            <Image
              src="/as-sa-adah logo.png"
              alt=""
              width={800}
              height={800}
              className="background-logo-img"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="about-card-content">
            <div className="about-content-wrapper">
              {/* Logo */}
              <div className={`about-image ${isMounted && isVisible ? 'fade-in' : ''}`}>
                <Image
                  src="/as-sa-adah logo.png"
                  alt="As-sa'adah Foundation Logo"
                  width={300}
                  height={300}
                  className="about-img"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              {/* Text Content */}
              <div className={`about-heading ${isMounted && isVisible ? 'fade-in' : ''}`}>
                <div className="about-heading-content">
                  <p className="about-section-subtitle">About As-sa'adah Foundation</p>
                  <h2 className="about-section-title">Comprehensive Islamic Welfare Organization</h2>
                  <div className="about-section-description">
                    <p>
                      As-sa'adah Foundation is a comprehensive Islamic welfare organization dedicated to 
                      social development, individual well-being, and spiritual growth. Based on Islamic 
                      principles of compassion and justice, we operate diverse programs spanning education, 
                      healthcare, poverty alleviation, women and children welfare, environmental protection, 
                      emergency relief, and spiritual development. Our mission is to create sustainable 
                      positive change through holistic community empowerment initiatives that address both 
                      worldly needs and spiritual growth of individuals and communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className={`about-button ${isMounted && isVisible ? 'fade-in' : ''}`}>
              <div className="about-btn-wrapper">
                <a href="/about" className="about-discover-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section-floating {
          position: relative;
          z-index: 10;
          margin-top: -150px;
          margin-bottom: 50px;
          padding: 0;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
        }

        .about-floating-card {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 25px 60px rgba(30, 58, 138, 0.15);
          border: 1px solid rgba(30, 58, 138, 0.1);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          max-width: 1000px;
          margin: 0 auto;
        }

        .about-floating-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 35px 80px rgba(30, 58, 138, 0.2);
        }

        .about-background-logo {
          position: absolute;
          top: 50%;
          right: -100px;
          transform: translateY(-50%);
          z-index: 1;
          opacity: 0.1;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .background-logo-img {
          filter: grayscale(100%) sepia(100%) hue-rotate(60deg) saturate(2);
          transition: all 0.3s ease;
        }

        .about-floating-card:hover .about-background-logo {
          opacity: 0.15;
          transform: translateY(-50%) scale(1.05);
        }

        .about-card-content {
          position: relative;
          z-index: 2;
        }

        .about-content-wrapper {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .about-image {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease;
          flex: 0 0 auto;
        }

        .about-image.fade-in {
          opacity: 1;
          transform: translateX(0);
        }

        .about-img {
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.2);
          transition: all 0.3s ease;
        }

        .about-img:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(30, 58, 138, 0.3);
        }

        .about-heading {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
          flex: 1;
        }

        .about-heading.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .about-section-subtitle {
          color: var(--primary-color);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 0.8rem;
          font-family: 'Montserrat', sans-serif;
        }

        .about-section-title {
          color: var(--primary-color);
          font-size: 1.9rem;
          font-weight: 800;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          line-height: 1.2;
        }

        .about-section-description {
          max-width: 100%;
        }

        .about-section-description p {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }

        .about-button {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.2s;
          text-align: center;
          margin-top: 1.5rem;
        }

        .about-button.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .about-discover-btn {
          display: inline-block;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(30, 58, 138, 0.3);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .about-discover-btn:hover {
          background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(30, 58, 138, 0.4);
          color: white;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .about-section-floating {
            margin-top: -100px;
            margin-bottom: 40px;
          }

          .about-floating-card {
            padding: 2rem 1.8rem;
            border-radius: 18px;
            max-width: 900px;
          }

          .about-content-wrapper {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .about-image {
            align-self: center;
          }

          .about-img {
            width: 300px;
            height: 200px;
          }

          .about-section-title {
            font-size: 1.8rem;
          }

          .about-section-description p {
            font-size: 1rem;
          }

          .about-background-logo {
            right: -60px;
            opacity: 0.08;
          }
        }

        @media (max-width: 480px) {
          .about-section-floating {
            margin-top: -80px;
            margin-bottom: 30px;
          }

          .about-floating-card {
            padding: 1.8rem 1.3rem;
            border-radius: 15px;
            max-width: 800px;
          }

          .about-img {
            width: 250px;
            height: 170px;
          }

          .about-section-title {
            font-size: 1.5rem;
          }

          .about-section-description p {
            font-size: 0.95rem;
          }

          .about-discover-btn {
            padding: 0.8rem 2rem;
            font-size: 0.9rem;
          }

          .about-background-logo {
            right: -40px;
            opacity: 0.06;
            transform: translateY(-50%) scale(0.9);
          }
        }
      `}</style>
    </section>
  );
}
