import Head from "next/head";
import Layout from "../components/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - As-sa'adah Foundation</title>
        <meta name="description" content="Learn about As-sa'adah Foundation - a comprehensive Islamic welfare organization dedicated to community development, education, healthcare, and spiritual growth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="about-page">
          <div className="about-container">
            <div className="about-content">
              {/* Left Content Section */}
              <div className="about-left">
                {/* About Header */}
                <div className="about-header">
                  <div className="about-subtitle">About</div>
                  <h2 className="about-title">As-sa'adah Foundation</h2>
                </div>

                {/* Description */}
                <div className="about-description">
                  <p>
                    <strong><span className="highlight-text">As-sa'adah Foundation</span></strong> is more than an organization — it's a movement of meaningful transformation. We are a values-driven platform that combines authentic Islamic knowledge with relevant, real-life application. Rooted in the Qur'an and Sunnah, and inspired by the powerful voice of Islamic scholars, we speak to the heart and mind of today's Muslim — building clarity, self-worth, and purpose.
                  </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                  <div className="service-item">
                    <div className="service-shape">
                      <div className="service-title">Academia</div>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-shape">
                      <div className="service-title">Counselling</div>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-shape">
                      <div className="service-title">Welfare</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Logo Section */}
              <div className="about-right">
                <div className="logo-container">
                  <img 
                    src="/as-sa-adah logo.png" 
                    alt="As-sa'adah Foundation Logo" 
                    className="about-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .about-page {
            padding: 100px 0;
            background: #fafafa;
            min-height: 80vh;
          }

          .about-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }

          .about-left {
            padding-right: 2rem;
          }

          .about-header {
            margin-bottom: 2rem;
          }

          .about-subtitle {
            color: var(--primary-color);
            font-size: 0.9rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 0.5rem;
            font-family: 'Montserrat', sans-serif;
            border-bottom: 2px solid var(--primary-color);
            display: inline-block;
            padding-bottom: 0.3rem;
          }

          .about-title {
            color: var(--primary-color);
            font-size: 2.5rem;
            font-weight: 800;
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.2;
          }

          .about-description {
            margin-bottom: 3rem;
          }

          .about-description p {
            color: #333;
            font-size: 1.1rem;
            line-height: 1.7;
            margin: 0;
          }

          .highlight-text {
            color: #f48a33;
            font-weight: 700;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }

          .service-item {
            text-align: center;
            transition: transform 0.3s ease;
            cursor: pointer;
          }

          .service-item:hover {
            transform: translateY(-5px);
          }

          .service-shape {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border-radius: 15px;
            padding: 1rem 1.5rem;
            box-shadow: 0 8px 25px rgba(30, 58, 138, 0.2);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .service-shape::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
            pointer-events: none;
          }

          .service-shape:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(30, 58, 138, 0.3);
          }

          .service-title {
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
            font-family: 'Montserrat', sans-serif;
            position: relative;
            z-index: 1;
          }

          .about-right {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 2rem;
          }

          .logo-container {
            max-width: 400px;
            width: 100%;
          }

          .about-logo {
            width: 100%;
            height: auto;
            object-fit: contain;
            filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
          }

          /* Responsive Design */
          @media (max-width: 991px) {
            .about-content {
              grid-template-columns: 1fr;
              gap: 3rem;
              text-align: center;
            }

            .about-left {
              padding-right: 0;
            }

            .about-right {
              padding-left: 0;
            }

            .services-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 1.5rem;
            }

            .about-title {
              font-size: 2rem;
            }
          }

          @media (max-width: 768px) {
            .about-page {
              padding: 60px 0;
            }

            .about-content {
              gap: 2rem;
            }

            .services-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
              max-width: 300px;
              margin: 0 auto;
            }

            .service-icon {
              width: 60px;
              height: 60px;
            }

            .about-title {
              font-size: 1.8rem;
            }

            .about-description p {
              font-size: 1rem;
            }

            .logo-container {
              max-width: 300px;
            }
          }

          @media (max-width: 480px) {
            .about-container {
              padding: 0 15px;
            }

            .about-title {
              font-size: 1.5rem;
            }

            .about-description p {
              font-size: 0.9rem;
            }

            .service-title {
              font-size: 1rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
