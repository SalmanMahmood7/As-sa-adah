import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FounderMessage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('founder-message');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <section id="founder-message" className="founder-message-section">
      <div className="founder-container">
        <div className="founder-content">
          {/* Header with centered layout */}
          <div className={`founder-header ${isVisible ? 'animate-in' : ''}`}>
            <div className="section-badge">Message from Leadership</div>
            <h2 className="section-title">Building the Future of Digital Ummah</h2>
            <div className="arabic-text">
              <span className="bismillah">بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْم</span>
            </div>
          </div>

          {/* Main content with modern card design */}
          <div className="founder-main-card">
            <div className={`founder-image-section ${isVisible ? 'animate-in' : ''}`}>
              <div className="image-wrapper">
                <div className="image-container">
                  <Image
                    src="/found.jpg"
                    alt="Founder"
                    width={450}
                    height={580}
                    className="founder-image"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUwIiBoZWlnaHQ9IjU1MCIgdmlld0JveD0iMCAwIDQ1MCA1NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0NTAiIGhlaWdodD0iNTUwIiBmaWxsPSIjZjNmNGY2Ii8+CjxjaXJjbGUgY3g9IjIyNSIgY3k9IjIyNSIgcj0iNjUiIGZpbGw9IiM5Y2EzYWYiLz4KPHBhdGggZD0iTTE0MCA0NzVjMC02Ni42IDU0LjEtMTIwIDEyMC0xMjBzMTIwIDUzLjQgMTIwIDEyMCIgZmlsbD0iIzljYTNhZiIvPgo8dGV4dCB4PSIyMjUiIHk9IjUyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzY2NiI+Rm91bmRlcjwvdGV4dD4KPC9zdmc+Cg==';
                    }}
                  />
                </div>
                <div className="founder-info">
                  <h3 className="founder-name">Muhammad Uzair Karghatra</h3>
                  <p className="founder-title">Founder & Visionary Leader</p>
                  <a href="/leadership" className="leadership-btn">
                    <span>Meet Our Team</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17l9.2-9.2M17 17V7H7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={`founder-message-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="message-wrapper">
                <div className="quote-mark">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                  </svg>
                </div>

                <div className="message-content">
                  <p className="opening-line">
                    Welcome to the future of the Ummah—a future we are building by digital bricks at As-Saadah.
                  </p>
                  
                  <div className="message-body">
                    <p>
                      The world stands at the precipice of a new era, one defined by rapid technological advancement and digital connectivity. We recognized a crucial imperative: our respected Madaris Graduates, the torchbearers of our spiritual heritage, must not only participate in this era but must lead it.
                    </p>
                    
                    <p>
                      As-Saadah was founded on a singular, powerful vision: to bridge the historic wisdom of Islamic scholarship with the modern demands of the digital economy. We are passionately committed to evolving the Ummah by equipping our graduates with the most sought-after modern IT and soft skills. This is more than just education; it is a movement for holistic empowerment.
                    </p>
                    
                    <p>
                      Under the guidance of our esteemed Patronage and the leadership of our highly experienced Directors, we provide the skills necessary for economic independence—whether through Shariah-Compliant business ventures or securing a due share in the global IT and entrepreneurial market.
                    </p>
                    
                    <p>
                      Crucially, our mission extends beyond employment. We are preparing a generation of digital scholars who can effectively leverage technology to advance the divine mission of Digital Dawah and Global Outreach. Our graduates will carry the message of Islam to every corner of the world, digitally and powerfully.
                    </p>
                    
                    <p>
                      Join us as we fulfill this profound responsibility. Together, we will transform our traditional strengths into modern global leadership, ensuring that our youth are not just recipients of technology, but its creators and moral guides.
                    </p>
                  </div>

                  <div className="signature-area">
                    <div className="signature-quote">"Your success is the success of the Ummah."</div>
                    <div className="signature-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .founder-message-section {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafe 0%, #ffffff 50%, #f8fafe 100%);
          color: #1a472a;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 50px 0;
        }

        .founder-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .founder-content {
          position: relative;
          z-index: 2;
        }

        .founder-header {
          text-align: center;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .founder-header.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          padding: 0.8rem 2.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 25px rgba(26, 71, 42, 0.3);
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1a472a;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          line-height: 1.2;
        }

        .arabic-text {
          margin-bottom: 1rem;
        }

        .bismillah {
          font-size: 2.2rem;
          font-weight: 700;
          color: #68d391;
          text-shadow: 0 0 20px rgba(104, 211, 145, 0.3);
          font-family: 'Amiri', serif;
          direction: rtl;
        }

        .founder-main-card {
          background: white;
          border-radius: 30px;
          padding: 3rem;
          box-shadow: 0 25px 80px rgba(26, 71, 42, 0.1);
          border: 1px solid rgba(26, 71, 42, 0.1);
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .founder-main-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1a472a, #68d391, #1a472a);
        }

        .founder-image-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
        }

        .founder-image-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .image-wrapper {
          text-align: center;
        }

        .image-container {
          position: relative;
          display: inline-block;
          border-radius: 25px;
          overflow: hidden;
          margin-bottom: 2rem;
          box-shadow: 0 20px 60px rgba(26, 71, 42, 0.2);
          border: 4px solid #68d391;
        }

        .image-container .founder-image {
          display: block !important;
          width: 140% !important;
          height: 120% !important;
          object-fit: cover !important;
          margin: -20% !important;
          transform: scale(1.2) !important;
          position: relative !important;
          transition: transform 0.3s ease;
        }

        .image-container:hover .founder-image {
          transform: scale(1.25) !important;
        }

        .founder-info {
          text-align: center;
        }

        .founder-name {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1a472a;
          margin-bottom: 0.5rem;
          font-family: 'Montserrat', sans-serif;
        }

        .founder-title {
          font-size: 1.1rem;
          color: #68d391;
          margin-bottom: 2rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .leadership-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          padding: 1rem 2rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(26, 71, 42, 0.3);
        }

        .leadership-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(26, 71, 42, 0.4);
        }

        .leadership-btn svg {
          transition: transform 0.3s ease;
        }

        .leadership-btn:hover svg {
          transform: translate(3px, -3px);
        }

        .founder-message-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.4s;
        }

        .founder-message-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .message-wrapper {
          position: relative;
        }

        .quote-mark {
          position: absolute;
          top: -20px;
          left: 0;
          color: #68d391;
          opacity: 0.3;
        }

        .message-content {
          padding-left: 2rem;
        }

        .opening-line {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a472a;
          line-height: 1.4;
          margin-bottom: 2rem;
          position: relative;
        }

        .message-body {
          margin-bottom: 2.5rem;
        }

        .message-body p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        .signature-area {
          text-align: center;
          margin-top: 2rem;
        }

        .signature-quote {
          font-size: 1.2rem;
          font-weight: 700;
          color: #68d391;
          font-style: italic;
          margin-bottom: 1rem;
        }

        .signature-line {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #68d391, transparent);
          margin: 0 auto;
        }

        @media (max-width: 968px) {
          .founder-main-card {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .message-content {
            padding-left: 0;
          }

          .quote-mark {
            position: relative;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 1rem;
          }
        }

        @media (max-width: 768px) {
          .founder-message-section {
            padding: 80px 0;
          }

          .founder-container {
            padding: 0 15px;
          }

          .section-title {
            font-size: 2rem;
          }

          .bismillah {
            font-size: 1.8rem;
          }

          .founder-main-card {
            padding: 2rem;
            border-radius: 20px;
          }

          .opening-line {
            font-size: 1.2rem;
          }

          .message-body p {
            font-size: 1rem;
          }

          .founder-name {
            font-size: 1.5rem;
          }

          .founder-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .founder-message-section {
            padding: 60px 0;
          }

          .founder-main-card {
            padding: 1.5rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .opening-line {
            font-size: 1.1rem;
          }

          .message-body p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}