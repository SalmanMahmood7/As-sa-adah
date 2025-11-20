import Head from "next/head";
import Layout from "../components/Layout";
import { socialLinks } from "../lib/socialLinks";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - As-saadah Foundation | Get in Touch</title>
        <meta name="description" content="Get in touch with As-saadah Foundation. Contact us for inquiries about our community projects, partnerships, volunteering, or donations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" type="image/png" />
      </Head>
      <Layout>
        <div className="contact-container">
          <section className="hero-section">
            <div className="hero-content">
              <h1>Get in Touch</h1>
              <p className="hero-subtitle">We'd love to hear from you. Reach out for any inquiries about our foundation projects, partnerships, volunteering, or donation opportunities.</p>
            </div>
          </section>

          <section className="contact-main">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="info-card">
                  <div className="icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59544 1.99522 8.06544 2.16708 8.43785 2.48353C8.81026 2.79999 9.06708 3.23945 9.15999 3.72C9.33657 4.68007 9.63272 5.62273 10.04 6.53C10.1856 6.88792 10.2374 7.27691 10.1903 7.65982C10.1433 8.04274 9.99505 8.40397 9.75999 8.7L8.51999 9.94C9.9281 12.4135 12.0865 14.5719 14.56 15.98L15.8 14.74C16.096 14.5049 16.4573 14.3567 16.8402 14.3097C17.2231 14.2626 17.6121 14.3144 17.97 14.46C18.8773 14.8673 19.8199 15.1634 20.78 15.34C21.2656 15.4336 21.7093 15.6944 22.0258 16.0713C22.3422 16.4482 22.5130 16.9232 22.51 17.41L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Phone</h3>
                  <p>+92 312 2221280</p>
                  <p>Available Mon-Fri 9AM-5PM</p>
                </div>

                <div className="info-card">
                  <div className="icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Email</h3>
                  <p>assaadahcontact525@gmail.com</p>
                  <p>We'll respond within 24 hours</p>
                </div>

                <div className="info-card">
                  <div className="icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Address</h3>
                  <p>As-saadah Foundation Center</p>
                  <p>Q634+452, Chaman Zar Hill, Islamabad, Pakistan</p>
                  <p>Office Hours: Mon-Fri 9AM-6PM</p>
                </div>

                <div className="social-links">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    {socialLinks.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label={platform.name}
                      >
                        <platform.Icon size={26} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <div className="form-container">
                  <h2>Send us a Message</h2>
                  <form>
                    <div className="form-group">
                      <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                      <select required>
                        <option value="">Select Inquiry Type</option>
                        <option value="projects">Foundation Projects</option>
                        <option value="partnership">Partnership</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="donation">Donation</option>
                        <option value="education">Digital Education Initiative</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="map-section">
            <div className="map-container">
              <div className="map-header">
                <h3>Visit Our Location</h3>
                <p>Find us at our main office and learning center</p>
              </div>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3318.2!2d73.20727320370115!3d33.753050922857064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ1JzExLjAiTiA3M8KwMTInMjYuMiJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="As-saadah Location"
                ></iframe>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .contact-container {
            min-height: 100vh;
          }

          .hero-section {
            background: linear-gradient(135deg, #1a472a 0%, #22543d 100%);
            color: white;
            padding: 80px 20px;
            text-align: center;
          }

          .hero-content h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .contact-main {
            padding: 80px 20px;
            background: #f8f9fa;
          }

          .contact-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .info-card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            text-align: center;
            transition: transform 0.3s ease;
          }

          .info-card:hover {
            transform: translateY(-5px);
          }

          .info-card .icon {
            color: #1a472a;
            margin-bottom: 1rem;
            display: flex;
            justify-content: center;
          }

          .info-card h3 {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #1a472a;
          }

          .info-card p {
            color: #7f8c8d;
            margin-bottom: 0.5rem;
            line-height: 1.5;
          }

          .social-links {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            text-align: center;
          }

          .social-links h3 {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            color: #1a472a;
          }

          .social-icons {
            display: flex;
            justify-content: center;
            gap: 1.2rem;
            flex-wrap: wrap;
          }

          .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 62px;
            height: 62px;
            padding: 0.5rem;
            background: white;
            border-radius: 50%;
            border: 1px solid #e5e7eb;
            box-shadow: 0 6px 18px rgba(0,0,0,0.1);
            text-decoration: none;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .social-icon:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 12px 24px rgba(26, 71, 42, 0.2);
          }

          .social-icon svg {
            width: 28px;
            height: 28px;
          }

          .contact-form {
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            overflow: hidden;
          }

          .form-container {
            padding: 3rem;
          }

          .form-container h2 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: #1a472a;
            text-align: center;
          }

          .form-group {
            margin-bottom: 1.5rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            width: 100%;
            padding: 1rem;
            border: 2px solid #ecf0f1;
            border-radius: 10px;
            font-size: 1rem;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
            background: #f8f9fa;
          }

          .form-group input:focus,
          .form-group select:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: #1a472a;
            box-shadow: 0 0 0 3px rgba(26, 71, 42, 0.1);
            background: white;
          }

          .form-group textarea {
            resize: vertical;
            min-height: 120px;
          }

          .submit-btn {
            width: 100%;
            background: linear-gradient(135deg, #1a472a, #22543d);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(26, 71, 42, 0.3);
            background: linear-gradient(135deg, #22543d, #2f855a);
          }

          .map-section {
            padding: 60px 20px;
            background: #f8f9fa;
          }

          .map-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .map-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .map-header h3 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #1a472a;
          }

          .map-header p {
            font-size: 1.2rem;
            color: #7f8c8d;
            max-width: 600px;
            margin: 0 auto;
          }

          .map-embed {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            background: white;
            padding: 10px;
          }

          .map-embed iframe {
            border-radius: 15px;
            width: 100%;
            height: 300px;
          }

          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2rem;
            }

            .contact-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .contact-main {
              padding: 40px 20px;
            }

            .form-container {
              padding: 2rem;
            }

            .info-card,
            .social-links {
              padding: 1.5rem;
            }

            .social-icons {
              gap: 0.8rem;
            }

            .social-icon {
              width: 54px;
              height: 54px;
              padding: 0.4rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
