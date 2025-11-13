import { useState, useEffect } from 'react';
import DonationModal from './DonationModal';

export default function Programs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDonationModal = () => {
    setIsModalOpen(true);
  };

  const closeDonationModal = () => {
    setIsModalOpen(false);
  };

  const donationCards = [
    {
      id: 1,
      title: "Healthcare Support",
      description: "Providing essential medical care and health services to underserved communities through mobile clinics, free consultations, and medicine distribution.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1000&h=600&q=80",
      link: "/donate/healthcare-support"
    },
    {
      id: 2,
      title: "Education Empowerment",
      description: "Building educational foundations through scholarship programs, learning centers, and digital literacy initiatives for children and adults.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1000&h=600&q=80",
      link: "/donate/education-empowerment"
    },
    {
      id: 3,
      title: "Food Security",
      description: "Ensuring no one goes hungry through food distribution programs, community kitchens, and sustainable farming initiatives.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&h=600&q=80",
      link: "/donate/food-security"
    },
    {
      id: 4,
      title: "Economic Development",
      description: "Creating sustainable livelihoods through skill development, microfinance, and entrepreneurship support programs.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&h=600&q=80",
      link: "/donate/economic-development"
    },
    {
      id: 5,
      title: "Clean Water Initiative",
      description: "Providing access to clean, safe drinking water through well construction, water purification systems, and sanitation programs.",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&h=600&q=80",
      link: "/donate/clean-water-initiative"
    },
    {
      id: 6,
      title: "Women Empowerment",
      description: "Empowering women through skills training, leadership development, and creating safe spaces for personal and professional growth.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&h=600&q=80",
      link: "/donate/women-empowerment"
    }
  ];

  return (
    <section id="programs" className="programs-section">
      {/* Header Section */}
      <div className="programs-header">
        <div className="container">
          <h2 className="programs-title">Our Welfare Programs</h2>
          <p className="programs-description">
            Through our diverse Islamic welfare programs, we work to address social challenges,
            empower communities, and promote both worldly well-being and spiritual growth based on Islamic principles.
          </p>
        </div>
      </div>

      {/* Donation Cards */}
      <div className="container">
        <div className="donation-cards-wrapper">
          {donationCards.map((card) => (
            <div key={card.id} className="col">
              <div className="donation-card" data-id={`donation-${card.id}`}>
                <div className="donation-image">
                  <a href={card.link}>
                    <img 
                      loading="lazy" 
                      src={card.image}
                      alt={card.title}
                      className="card-image"
                    />
                  </a>
                </div>
                
                <div className="donation-content">
                  <h3 className="donation-title">
                    <a href={card.link}>{card.title}</a>
                  </h3>
                  <div className="donation-short-description">
                    {card.description}
                  </div>
                  
                  <div className="donation-buttons">
                    <div className="button-col">
                      <button 
                        type="button" 
                        className="donation-button quick-button"
                        onClick={openDonationModal}
                      >
                        Quick Donate
                        <span className="icon">
                          <i className="fas fa-hand-holding-heart"></i>
                        </span>
                      </button>
                    </div>
                    <div className="button-col">
                      <a 
                        href={card.link} 
                        className="donation-button learn-more-button"
                      >
                        Learn More
                        <span className="icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DonationModal isOpen={isModalOpen} onClose={closeDonationModal} />

      <style jsx>{`
        .programs-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header Section */
        .programs-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .programs-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
        }

        .programs-description {
          font-size: 1.2rem;
          color: var(--text-gray);
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Donation Cards Layout */
        .donation-cards-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .col {
          display: flex;
        }

        .donation-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .donation-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(26, 71, 42, 0.2);
        }

        /* Image Section */
        .donation-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .donation-card:hover .card-image {
          transform: scale(1.05);
        }


        /* Content Section */
        .donation-content {
          padding: 1.8rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .donation-title {
          margin: 0 0 0.8rem 0;
          font-size: 1.2rem;
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
        }

        .donation-title a {
          color: var(--primary-color);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .donation-title a:hover {
          color: var(--secondary-color);
        }

        .donation-short-description {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        /* Buttons Section */
        .donation-buttons {
          display: flex;
          gap: 0.8rem;
          margin-top: auto;
        }

        .button-col {
          flex: 1;
        }

        .donation-button {
          width: 100%;
          padding: 12px 8px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          transition: all 0.3s ease;
          text-decoration: none;
          border: none;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          text-align: center;
          white-space: nowrap;
          min-height: 44px;
        }

        .quick-button {
          background: white;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .quick-button:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(26, 71, 42, 0.3);
        }

        .learn-more-button {
          background: var(--primary-color);
          color: white;
          border: 2px solid var(--primary-color);
        }

        .learn-more-button:hover {
          background: var(--secondary-color);
          border-color: var(--secondary-color);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(26, 71, 42, 0.3);
          color: white;
        }

        .icon {
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .donation-cards-wrapper {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .programs-title {
            font-size: 2.5rem;
          }

          .programs-description {
            font-size: 1rem;
          }

          .donation-cards-wrapper {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
          }

          .donation-buttons {
            flex-direction: column;
            gap: 0.6rem;
          }

          .donation-content {
            padding: 1.2rem;
          }

          .donation-image {
            height: 160px;
          }
        }

        @media (max-width: 480px) {
          .programs-section {
            padding: 60px 0;
          }

          .programs-title {
            font-size: 2rem;
          }

          .donation-cards-wrapper {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .donation-image {
            height: 160px;
          }

          .donation-content {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}