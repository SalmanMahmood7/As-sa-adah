import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DonationModal from "../components/DonationModal";

export default function Programs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openDonationModal = () => {
    setIsModalOpen(true);
  };

  const closeDonationModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Projects - As-saadah Foundation | Community Impact Initiatives</title>
        <meta name="description" content="Explore As-saadah Foundation's community impact projects including our Digital Education Initiative, Community Development programs, and Youth Empowerment efforts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" type="image/png" />
      </Head>
      <Layout>
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
              <div>
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

        <DonationModal isOpen={isModalOpen} onClose={closeDonationModal} />

        <div className="programs-container main-content">
          <section className="vision-section">
            <div className="vision-card">
              <h2>Vision of As-sa'adah</h2>
              <p>
                As-Saadah is a multidimensional intellectual and educational movement dedicated to empowering graduates of traditional seminaries (Madaris) with the knowledge, creativity, and practical skills necessary to meet the evolving challenges of the modern world. It envisions a transformative framework that unites classical Islamic scholarship with contemporary sciences and technology, cultivating scholars who serve not only as spiritual and moral guides but as visionary leaders contributing to social, intellectual, and economic progress.
              </p>
              <p>
                As the first organized initiative of its kind in the Muslim world, As-Saadah seeks to produce an independent generation capable of developing indigenous technological alternatives to Western dominance&mdash;enabling the Muslim Ummah to reclaim its global identity and contribute to the creation of a balanced, dignified, and self-reliant world order.
              </p>
            </div>
            <div className="vision-card programs-mission-card">
              <h2>Mission of As-sa'adah</h2>
              <p>
                As-Saadah's mission is to redefine the intellectual and socio-economic role of Madrasah graduates by integrating classical Islamic scholarship with modern sciences, technology, and leadership development.
              </p>
              <p>
                It seeks to cultivate a new generation of visionary 'Ulama who unite faith with functionality and tradition with transformation - reviving critical thought, fostering economic self-reliance through skill empowerment and entrepreneurship, and inspiring ethical, globally aware leadership. By bridging traditional and modern institutions and promoting indigenous technological innovation that challenges Western dominance, As-Saadah aims to initiate a civilizational renewal - where the Muslim Ummah reclaims its intellectual authority, moral influence, and constructive role in shaping a just, balanced, and self-sustained world order.
              </p>
            </div>

            <div className="batch-section">
              <div className="batch-header-card">
                <h2>From Learning to Leadership: The Rise of Batch 1</h2>
                <p className="batch-description">
                  Our inaugural cohort, Batch 1: The Pioneers, proved that the combination of dedicated focus and ethical grounding leads to exceptional achievement. They have successfully laid the foundation for the next generation of digital scholars.
                </p>
              </div>

              <div className="batch-grid" role="list">
                {[
                  {
                    title: "Commitment",
                    text: "Demonstrated discipline rarely seen in conventional programs."
                  },
                  {
                    title: "Dual Mastery",
                    text: "Successfully synthesized complex technical skills with their existing religious knowledge."
                  },
                  {
                    title: "Real-World Application",
                    text: "Graduates deployed impressive Capstone Projects aimed at solving community and business challenges."
                  },
                  {
                    title: "The Al-Sa'adah Network",
                    text: "Graduates are now part of an exclusive network dedicated to mentorship and ethical tech career advancement."
                  }
                ].map((item) => (
                  <article className="batch-card" key={item.title} role="listitem">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>

              <blockquote className="batch-quote">
                "As-Saadah equipped me not only with coding skills but with the confidence to apply AI ethically. We are the new leaders, ready to serve the Ummah with knowledge and technology."
              </blockquote>
            </div>

          </section>
        </div>

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
          
          .main-content {
            position: relative;
            z-index: 2;
            background: white;
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
            padding: 0 20px;
            color: #1a472a;
          }

          .hero-overlay h1 {
            font-size: 4.5rem;
            font-weight: 900;
            margin-bottom: 2rem;
            font-family: 'Montserrat', sans-serif;
            color: #f7fff1;
            text-shadow: 0 18px 35px rgba(0, 0, 0, 0.9), 0 0 12px rgba(0, 0, 0, 0.45);
            line-height: 1.1;
            letter-spacing: -0.02em;
          }

          .hero-overlay button {
            padding: 1rem 2.25rem;
            border-radius: 32px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-right: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .hero-overlay .primary-btn {
            border: none;
            background: linear-gradient(135deg, #1a472a, #22543d);
            color: white;
            box-shadow: 0 6px 20px rgba(26, 71, 42, 0.4);
          }

          .hero-overlay .primary-btn:hover {
            background: linear-gradient(135deg, #22543d, #2f855a);
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(26, 71, 42, 0.45);
          }

          .hero-overlay .secondary-btn {
            background: #ffffff;
            color: #1a472a;
            border: none;
            box-shadow: 0 6px 15px rgba(26, 71, 42, 0.15);
          }

          .hero-overlay .secondary-btn:hover {
            background: #ffffff;
            color: #1a472a;
            transform: translateY(-4px);
            box-shadow: 0 10px 24px rgba(26, 71, 42, 0.2);
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

          .hero-content-left {
            text-align: left;
            margin: 0;
            margin-left: 4rem;
            max-width: 650px;
          }

          .hero-title {
            font-size: 2.8rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1.2rem;
            font-family: 'Montserrat', sans-serif;
            text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
          }

          .hero-title-multiline {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .hero-title-line {
            display: block;
          }

          .hero-title-line-typed {
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }

          .line-green {
            display: block;
            margin-bottom: 0.5rem;
          }

          .hero-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .hero-actions-left {
            justify-content: flex-start;
          }

          .hero-btn {
            padding: 1rem 2rem;
            border: none;
            border-radius: 30px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            font-family: 'Montserrat', sans-serif;
          }

          .hero-btn.primary {
            background: linear-gradient(135deg, #1a472a, #22543d);
            color: white;
            box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
          }

          .hero-btn.primary:hover {
            background: linear-gradient(135deg, #22543d, #2f855a);
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(26, 71, 42, 0.4);
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

          .programs-container {
            min-height: 100vh;
          }

          .vision-section {
            padding: 80px 20px;
            background: #f8f9fa;
          }

          .vision-card,
          .programs-mission-card {
            width: min(900px, 100%);
            margin: 0 auto;
            background: white;
            padding: clamp(2rem, 5vw, 3rem);
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(26, 71, 42, 0.1);
            box-sizing: border-box;
            overflow: hidden;
          }

          .programs-mission-card {
            margin-top: 2.5rem;
          }

          .batch-section {
            margin-top: 3rem;
            display: flex;
            flex-direction: column;
            gap: 2.2rem;
          }

          .batch-header-card {
            background: linear-gradient(135deg, rgba(26, 71, 42, 0.85), rgba(34, 84, 61, 0.9));
            color: white;
            padding: 2.5rem;
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
            text-align: center;
          }

          .batch-header-card h2 {
            font-size: 2.45rem;
            margin-bottom: 0.4rem;
            font-family: 'Montserrat', sans-serif;
          }

          .batch-description {
            font-size: 1.05rem;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.9);
            max-width: 800px;
            margin: 0 auto;
          }

          .batch-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }

          .batch-card {
            background: white;
            border-radius: 18px;
            padding: 1.5rem;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(26, 71, 42, 0.12);
          }

          .batch-card h3 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            color: #1a472a;
          }

          .batch-card p {
            color: #4a5568;
            line-height: 1.55;
            margin: 0;
          }

          .batch-quote {
            font-size: 1.15rem;
            font-weight: 500;
            text-align: center;
            font-style: italic;
            color: #1a472a;
            background: #f0fff4;
            border-left: 5px solid #1a472a;
            padding: 1.6rem;
            border-radius: 18px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          }

          .vision-card h2,
          .programs-mission-card h2 {
            font-size: clamp(0.95rem, 3.5vw, 2.6rem);
            color: #1a472a;
            margin: 0 auto 1.5rem;
            font-weight: 800;
            text-align: center;
            letter-spacing: -0.01em;
            display: block;
            line-height: 1.2;
            white-space: normal;
          }

          .vision-card p,
          .programs-mission-card p {
            font-size: clamp(1rem, 2.4vw, 1.1rem);
            line-height: 1.85;
            color: #444;
            margin-bottom: 0;
            text-align: justify;
            word-break: normal;
            overflow-wrap: break-word;
            hyphens: auto;
          }

          .cta-section {
            background: #f8f9fa;
            padding: 80px 20px;
            text-align: center;
          }

          .cta-content h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #333;
          }

          .cta-content p {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .btn-primary, .btn-secondary {
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
          }

          .btn-primary {
            background: linear-gradient(135deg, #1a472a 0%, #22543d 100%);
            color: white;
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(26, 71, 42, 0.3);
          }

          .btn-secondary {
            background: transparent;
            color: #1a472a;
            border: 2px solid #1a472a;
          }

          .btn-secondary:hover {
            background: #1a472a;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(26, 71, 42, 0.3);
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

            .hero-overlay h1 {
              font-size: 2.5rem;
            }

            .hero-overlay button {
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

            .hero-content h1 {
              font-size: 2rem;
            }

            .vision-section {
              padding: 60px 15px;
            }

            .vision-card,
            .programs-mission-card {
              width: min(580px, 100%);
              padding: clamp(1.5rem, 7vw, 2.25rem);
              margin: 0 auto 1.25rem;
              border-radius: 20px;
            }

            .batch-header-card {
              padding: 2.5rem;
            }

            .batch-header-card h2 {
              font-size: 2rem;
            }

            .batch-grid {
              grid-template-columns: 1fr;
            }

            .programs-mission-card {
              margin-top: 1.5rem;
            }

            .vision-card h2,
            .programs-mission-card h2 {
              font-size: clamp(0.95rem, 5vw, 2rem);
              text-align: center;
              margin: 0.4rem auto 0.85rem;
              display: block;
              white-space: normal;
            }

            .vision-card p,
            .programs-mission-card p {
              font-size: 0.98rem;
              margin-bottom: 0;
              text-align: justify;
              line-height: 1.6;
            }

            .vision-card p + p,
            .programs-mission-card p + p {
              margin-top: 0.75rem;
            }

            .cta-content h2 {
              font-size: 2rem;
            }
            
            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }
            
            .btn-primary, .btn-secondary {
              width: 100%;
              max-width: 300px;
            }
          }

          @media (max-width: 540px) {
            .vision-card,
            .programs-mission-card {
              width: calc(100% - 24px);
              padding: 1.4rem 1.6rem;
              margin: 0 auto 1.25rem;
            }

            .vision-card h2,
            .programs-mission-card h2 {
              font-size: clamp(0.9rem, 5.5vw, 1.6rem);
              line-height: 1.2;
              white-space: normal;
              text-align: center;
              display: block;
              margin: 0.25rem auto 0.75rem;
            }

            .vision-card p,
            .programs-mission-card p {
              font-size: 0.95rem;
              line-height: 1.5;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
