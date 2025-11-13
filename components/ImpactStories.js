import { useState, useEffect } from 'react';

export default function ImpactStories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const impactStories = [
    {
      title: "Education Transformed My Life",
      story: "As-sa'adah Foundation's scholarship program gave me the opportunity to pursue higher education when my family couldn't afford it. Now I'm a teacher helping other children in my community.",
      name: "Fatima Ahmed",
      position: "Teacher & Scholarship Recipient",
      image: "/testimonial-1.jpg"
    },
    {
      title: "Medical Care When We Needed Most",
      story: "When my father needed urgent surgery, As-sa'adah Foundation's medical assistance program covered all expenses. Their support saved his life and our family from financial ruin.",
      name: "Muhammad Hassan",
      position: "Beneficiary Family",
      image: "/testimonial-2.jpg"
    },
    {
      title: "From Poverty to Self-Reliance",
      story: "The skill development program taught me tailoring. With the sewing machine they provided, I started my own business and now support my entire family with dignity.",
      name: "Aisha Bibi",
      position: "Entrepreneur & Program Graduate",
      image: "/testimonial-3.jpg"
    },
    {
      title: "Clean Water Changed Everything",
      story: "Before the water well project in our village, we walked hours daily for water. Now our children attend school instead of fetching water, and waterborne diseases have disappeared.",
      name: "Ibrahim Khan",
      position: "Village Elder",
      image: "/testimonial-4.jpg"
    },
    {
      title: "Emergency Relief in Crisis",
      story: "When floods destroyed our home, As-sa'adah Foundation provided immediate shelter, food, and rebuilding materials. They stood by us when we had nowhere to turn.",
      name: "Khadija Malik",
      position: "Flood Victim & Survivor",
      image: "/testimonial-5.jpg"
    },
    {
      title: "Spiritual Growth Through Knowledge",
      story: "The Islamic education classes at our mosque helped me understand my faith deeply. The knowledge I gained guides every aspect of my life and brings peace to my heart.",
      name: "Abdullah Rashid",
      position: "Community Student",
      image: "/testimonial-6.jpg"
    }
  ];

  const totalSlides = impactStories.length;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="impact-stories-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Impact Stories</h2>
          <p className="section-description">
            Real stories from lives transformed through As-sa'adah Foundation's welfare programs
          </p>
        </div>

        <div className="testimonial-slider">
          {/* Pagination Bullets */}
          <div className="slider-pagination">
            {impactStories.map((_, index) => (
              <button
                key={index}
                className={`pagination-bullet ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slides Container */}
          <div className="testimonial-container">
            <div 
              className="testimonial-wrapper"
              style={{ transform: `translateX(-${currentSlide * 400}px)` }}
            >
              {/* Duplicate slides for infinite loop effect */}
              {[...impactStories, ...impactStories, ...impactStories].map((story, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-inner">
                    <div className="testimonial-content">
                      <p>
                        <span className="story-title">{story.title}</span>
                        <br />
                        <span className="story-description">
                          <br />
                          {story.story}
                          <br />
                        </span>
                      </p>
                    </div>

                    <div className="testimonial-client-info">
                      <div className="testimonial-avatar">
                        <div className="testimonial-image">
                          <img
                            src={story.image}
                            alt={story.name}
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiNmM2Y0ZjYiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSIyNSIgcj0iMTAiIGZpbGw9IiM5Y2EzYWYiLz4KPHBhdGggZD0iTTEwIDUwYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwczIwIDguOTU0IDIwIDIwIiBmaWxsPSIjOWNhM2FmIi8+Cjwvc3ZnPgo=';
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="client-details">
                        <p className="client-name">{story.name}</p>
                        <div className="client-position">{story.position}</div>
                      </div>
                    </div>

                    <div className="quote-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="37" viewBox="0 0 45 37" fill="none">
                        <path d="M20 21.3543V0H0V37H3.55556L20 21.3543ZM2.96296 2.96H17.037V20.0857L2.96296 33.4762V2.96Z" fill="#EEEEEE"/>
                        <path d="M25 37H28.5556L45 21.3543V0H25V37ZM27.963 2.96H42.037V20.0857L27.963 33.4762V2.96Z" fill="#EEEEEE"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .impact-stories-section {
          padding: 100px 0;
          background: var(--light-bg);
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
        }

        .section-description {
          font-size: 1.1rem;
          color: var(--text-gray);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .testimonial-slider {
          position: relative;
          overflow: hidden;
          max-width: 1200px;
          margin: 0 auto;
        }

        .slider-pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 3rem;
        }

        .pagination-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d1d5db;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pagination-bullet.active {
          background: var(--primary-color);
          transform: scale(1.2);
        }

        .testimonial-container {
          position: relative;
          overflow: hidden;
          height: 400px;
        }

        .testimonial-wrapper {
          display: flex;
          transition: transform 0.5s ease;
          height: 100%;
        }

        .testimonial-slide {
          min-width: 370px;
          margin-right: 30px;
          height: 100%;
        }

        .testimonial-inner {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          height: 100%;
          position: relative;
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testimonial-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(30, 58, 138, 0.15);
        }

        .testimonial-content {
          flex: 1;
          margin-bottom: 2rem;
        }

        .testimonial-content p {
          margin: 0;
          line-height: 1.6;
        }

        .story-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-color);
          display: block;
          margin-bottom: 1rem;
        }

        .story-description {
          color: var(--text-gray);
          font-size: 14px;
          line-height: 1.7;
        }

        .testimonial-client-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-avatar {
          flex-shrink: 0;
        }

        .testimonial-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--light-bg);
        }

        .testimonial-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .client-details {
          flex: 1;
        }

        .client-name {
          font-weight: 600;
          color: var(--text-dark);
          margin: 0 0 0.3rem 0;
          font-size: 1rem;
        }

        .client-position {
          color: var(--text-gray);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .quote-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0.1;
        }

        .quote-icon svg {
          width: 40px;
          height: 32px;
        }

        @media (max-width: 768px) {
          .impact-stories-section {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .testimonial-slide {
            min-width: 320px;
            margin-right: 20px;
          }

          .testimonial-inner {
            padding: 2rem 1.5rem;
          }

          .testimonial-container {
            height: auto;
            min-height: 350px;
          }

          .testimonial-wrapper {
            transform: none !important;
            flex-direction: column;
            gap: 2rem;
          }

          .testimonial-slide {
            min-width: 100%;
            margin-right: 0;
          }

          .slider-pagination {
            order: -1;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 480px) {
          .testimonial-inner {
            padding: 1.5rem;
          }

          .story-title {
            font-size: 15px;
          }

          .story-description {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}
