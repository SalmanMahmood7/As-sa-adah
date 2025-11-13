import { useState, useEffect } from 'react';
import Image from 'next/image';
import DonationModal from './DonationModal';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const slides = [
    { 
      image: '/hero-image-1.jpg',
      alt: "As-sa'adah Foundation - Education & Religious Studies"
    },
    { 
      image: '/hero-image-2.jpg',
      alt: "As-sa'adah Foundation - Healthcare Services"
    },
    { 
      image: '/hero-image-3.jpg',
      alt: "As-sa'adah Foundation - Community Service"
    },
    { 
      image: '/hero-image-4.jpg',
      alt: "As-sa'adah Foundation - Charity & Welfare"
    },
    { 
      image: '/hero-image-5.jpg',
      alt: "As-sa'adah Foundation - Islamic Center"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const openDonationModal = () => {
    setIsModalOpen(true);
  };

  const closeDonationModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="hero">
      <div className="hero-image">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <Image 
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              style={{ objectFit: 'cover' }}
              unoptimized={true}
            />
          </div>
        ))}
        
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
            <h1 className="hero-title">
              <div className="line-green line-one">As-sa'adah Foundation</div>
              <div className="line-green">Empowering Communities</div>
            </h1>
            <div className="hero-actions">
              <button className="hero-btn primary" onClick={openDonationModal}>
                Donate Now
              </button>
              <button className="hero-btn secondary">Learn More</button>
            </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          className="hero-arrow hero-arrow-left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        
        <button 
          className="hero-arrow hero-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#8250;
        </button>

        {/* Slide Navigation Dots */}
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <DonationModal isOpen={isModalOpen} onClose={closeDonationModal} />

      <style jsx>{`
        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          display: flex;
          align-items: center;
          z-index: 2;
        }

        .hero-dots {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 3;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: white;
          transform: scale(1.2);
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        .hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.8rem;
          cursor: pointer;
          z-index: 3;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .hero-arrow:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .hero-arrow-left {
          left: 20px;
        }

        .hero-arrow-right {
          right: 20px;
        }

        .hero-overlay .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        .hero-content {
          text-align: center;
          color: #1a472a;
          max-width: 650px;
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          padding: 3rem 3.5rem;
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.2rem;
          font-family: 'Montserrat', sans-serif;
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
        }

        .line-white {
          color: white;
          display: block;
          line-height: 1.1;
        }

        .line-green {
          color: #1a472a;
          display: block;
          line-height: 1.1;
          font-weight: 900;
        }

        .line-one {
          white-space: nowrap;
          font-size: clamp(1.8rem, 4.2vw, 2.6rem);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          opacity: 0.95;
          font-weight: 400;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
          border: none;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-btn.primary {
          background: #1a472a;
          color: white;
          box-shadow: 0 8px 25px rgba(26, 71, 42, 0.3);
        }

        .hero-btn.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(26, 71, 42, 0.4);
          background: #22543d;
        }

        .hero-btn.secondary {
          background: transparent;
          color: #1a472a;
          border: 2px solid #1a472a;
        }

        .hero-btn.secondary:hover {
          background: #1a472a;
          color: white;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: clamp(1.9rem, 6vw, 2.4rem);
          }

          .line-one {
            font-size: clamp(1.7rem, 5vw, 2.2rem);
          }

          .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .hero-actions {
            flex-direction: column;
            gap: 1rem;
          }

          .hero-btn {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding: 2.2rem 1.8rem;
          }

          .hero-title {
            font-size: 1.85rem;
          }

          .line-one {
            font-size: 1.55rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-arrow {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }

          .hero-arrow-left {
            left: 10px;
          }

          .hero-arrow-right {
            right: 10px;
          }
        }
      `}</style>
    </section>
  );
}
