import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import About from "./About";

export default function Education() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: "/WhatsApp Image 2025-11-05 at 02.57.46_321328ff.jpg",
      alt: "Religious scholars collaborating during a digital literacy session"
    },
    {
      src: "/WhatsApp Image 2025-11-05 at 12.38.05_77150b61.jpg",
      alt: "Instructor guiding students through a digital empowerment workshop"
    },
    {
      src: "/education-hero-bg-alt.jpg",
      alt: "Aerial view of As-saadah education hub"
    },
    {
      src: "/WhatsApp Image 2025-11-05 at 18.32.17_254218d3.jpg",
      alt: "Students presenting project work as part of the program"
    }
  ];

  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <section className="hero">
        <div className="hero-image">
          {heroImages.map((image, index) => (
            <div
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              key={image.src}
              aria-hidden={index !== currentSlide}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
                unoptimized={true}
              />
            </div>
          ))}

          <div className="hero-overlay">
            <div className="container">
              <div className="hero-content">
                <h1>
                  Religious Empowerment Program
                  <br />
                  for Madrasa Graduates
                </h1>
                <div>
                  <button className="primary-btn" onClick={() => router.push("/admission-terms")}>
                    Apply Now
                  </button>
                  <button className="secondary-btn" onClick={() => router.push("/courses")}>
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-progress" role="tablist" aria-label="Select hero visual">
            {heroImages.map((_, index) => (
              <button
                key={`hero-progress-${index}`}
                type="button"
                className={`progress-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show hero image ${index + 1}`}
                aria-pressed={index === currentSlide}
              />
            ))}
          </div>
        </div>
      </section>

      <About />

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 620px;
          overflow: hidden;
          z-index: 1;
        }

        .hero-image {
          position: relative;
          width: 100%;
          height: 100%;
          isolation: isolate;
        }

        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1.25s ease-in-out, transform 1.25s ease-in-out;
          z-index: 0;
          transform: scale(1.025);
        }

        .hero-slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 1;
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

        .hero-overlay .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        .hero-content {
          text-align: center;
          color: #1a472a;
          max-width: 700px;
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          padding: 2.5rem;
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: 3.2rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          color: #1a472a;
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .hero-content button {
          padding: 1rem 2rem;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-right: 1rem;
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-content .primary-btn {
          border: none;
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
        }

        .hero-content .primary-btn:hover {
          background: linear-gradient(135deg, #22543d, #2f855a);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(26, 71, 42, 0.4);
        }

        .hero-content .secondary-btn {
          background: transparent;
          color: #1a472a;
          border: 2px solid #1a472a;
        }

        .hero-content .secondary-btn:hover {
          background: #1a472a;
          color: white;
          transform: translateY(-3px);
        }

        .hero-progress {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          z-index: 3;
        }

        .progress-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.8);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
          outline: none;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.15);
        }

        .progress-dot:hover {
          border-color: #ffffff;
        }

        .progress-dot.active {
          background: #1a472a;
          border-color: #1a472a;
          transform: scale(1.15);
        }


        @media (max-width: 768px) {
          .hero {
            height: 100vh;
            min-height: 560px;
          }

          .hero-image {
            height: 100%;
            min-height: inherit;
          }

          .hero-slide {
            height: 100%;
          }

          .hero-content {
            padding: 2rem;
            max-width: 90%;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-content button {
            width: 100%;
            margin-right: 0;
            margin-bottom: 1rem;
          }

          .hero-progress {
            bottom: 15px;
          }

          .progress-dot {
            width: 10px;
            height: 10px;
          }

        }
      `}</style>
    </>
  );
}