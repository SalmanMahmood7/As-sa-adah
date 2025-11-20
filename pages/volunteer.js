import Head from "next/head";
import Layout from "../components/Layout";

export default function Volunteer() {
  const volunteerOpportunities = [
    {
      title: "Education & Teaching",
      description: "Help teach in our schools and adult education programs, provide tutoring, or develop educational materials",
      skills: ["Teaching experience", "Subject expertise", "Patience", "Communication skills"],
      commitment: "2-4 hours per week"
    },
    {
      title: "Healthcare Support",
      description: "Assist in medical camps, health awareness campaigns, or support our healthcare facilities",
      skills: ["Medical training", "First aid", "Health education", "Community outreach"],
      commitment: "4-6 hours per week"
    },
    {
      title: "Community Outreach",
      description: "Help identify needy families, distribute aid, and connect with local communities",
      skills: ["Local knowledge", "Communication", "Empathy", "Cultural sensitivity"],
      commitment: "3-5 hours per week"
    },
    {
      title: "Digital & Tech Support",
      description: "Manage social media, website updates, digital campaigns, or IT support",
      skills: ["Social media", "Web design", "IT skills", "Digital marketing"],
      commitment: "2-3 hours per week"
    },
    {
      title: "Administrative Support",
      description: "Help with documentation, data entry, event planning, or office management",
      skills: ["Organization", "Data entry", "Event planning", "Office management"],
      commitment: "2-4 hours per week"
    },
    {
      title: "Creative & Media",
      description: "Create promotional materials, photography, videography, or graphic design",
      skills: ["Design software", "Photography", "Video editing", "Creative writing"],
      commitment: "1-3 hours per week"
    }
  ];

  return (
    <>
      <Head>
        <title>Volunteer - As-sa'adah Foundation</title>
        <meta name="description" content="Join As-sa'adah Foundation as a volunteer and contribute to our Islamic welfare mission through various programs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" type="image/png" />
      </Head>
      <Layout>
        <div className="volunteer-page">
          {/* Hero Section */}
          <section className="volunteer-hero">
            <div className="container">
              <div className="volunteer-hero-content">
                <h1>Volunteer with As-sa'adah Foundation</h1>
                <p>Join our mission to serve humanity through Islamic welfare programs. Your time, skills, and dedication can make a real difference in the lives of those who need it most.</p>
                <div className="hero-stats">
                  <div className="stat">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Active Volunteers</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Programs</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">25,000+</div>
                    <div className="stat-label">Lives Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Volunteer */}
          <section className="why-volunteer">
            <div className="container">
              <h2>Why Volunteer with Us?</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h3>Earn Spiritual Rewards</h3>
                  <p>Gain the immense spiritual benefits of serving Allah's creation and helping those in need</p>
                </div>
                <div className="benefit-card">
                  <h3>Develop Skills</h3>
                  <p>Gain valuable experience in community work, leadership, and various professional skills</p>
                </div>
                <div className="benefit-card">
                  <h3>Build Community</h3>
                  <p>Connect with like-minded individuals and build lasting relationships within the Muslim community</p>
                </div>
                <div className="benefit-card">
                  <h3>Create Impact</h3>
                  <p>Be part of measurable positive change in education, healthcare, and poverty alleviation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Volunteer Opportunities */}
          <section className="volunteer-opportunities">
            <div className="container">
              <h2>Volunteer Opportunities</h2>
              <div className="opportunities-grid">
                {volunteerOpportunities.map((opportunity, index) => (
                  <div key={index} className="opportunity-card">
                    <h3>{opportunity.title}</h3>
                    <p className="opportunity-description">{opportunity.description}</p>
                    
                    <div className="opportunity-details">
                      <div className="skills-section">
                        <h4>Skills Needed:</h4>
                        <ul className="skills-list">
                          {opportunity.skills.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="commitment-section">
                        <h4>Time Commitment:</h4>
                        <p>{opportunity.commitment}</p>
                      </div>
                    </div>
                    
                    <button className="volunteer-btn">Apply Now</button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How to Join */}
          <section className="how-to-join">
            <div className="container">
              <h2>How to Become a Volunteer</h2>
              <div className="steps-grid">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Contact Us</h3>
                  <p>Reach out via phone or email to express your interest in volunteering</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Interview</h3>
                  <p>Have a brief conversation about your skills, interests, and availability</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Orientation</h3>
                  <p>Attend our volunteer orientation to learn about our programs and values</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Start Serving</h3>
                  <p>Begin your volunteer work and make a positive impact in the community</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="volunteer-contact">
            <div className="container">
              <div className="contact-content">
                <h2>Ready to Join Our Team?</h2>
                <p>Contact us today to start your journey as a volunteer with As-sa'adah Foundation</p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-info">
                      <h4>Phone</h4>
                      <p>+92 312 2221280</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="method-info">
                      <h4>Email</h4>
                      <p>assaadahcontact525@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="volunteer-note">
                  <h4>Requirements</h4>
                  <ul>
                    <li>Commitment to Islamic values and our mission</li>
                    <li>Reliable and dedicated to helping others</li>
                    <li>Available for regular volunteer work</li>
                    <li>Background check may be required for certain roles</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .volunteer-page {
            padding-top: 0;
          }

          .volunteer-hero {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 100px 0;
            text-align: center;
          }

          .volunteer-hero-content h1 {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            font-family: 'Montserrat', sans-serif;
          }

          .volunteer-hero-content > p {
            font-size: 1.2rem;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto 3rem;
          }

          .hero-stats {
            display: flex;
            justify-content: center;
            gap: 4rem;
            flex-wrap: wrap;
          }

          .stat {
            text-align: center;
          }

          .stat-number {
            font-size: 2.5rem;
            font-weight: 800;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: 0.5rem;
            color: white;
          }

          .stat-label {
            font-size: 1rem;
            opacity: 0.9;
            color: white;
          }

          .why-volunteer {
            padding: 100px 0;
            background: var(--light-bg);
          }

          .why-volunteer h2 {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 4rem;
            font-family: 'Montserrat', sans-serif;
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .benefit-card {
            background: white;
            padding: 3rem 2rem;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(30, 58, 138, 0.1);
            transition: all 0.3s ease;
          }

          .benefit-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(30, 58, 138, 0.2);
          }

          .benefit-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
          }

          .benefit-card h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .benefit-card p {
            color: var(--text-gray);
            line-height: 1.6;
          }

          .volunteer-opportunities {
            padding: 100px 0;
            background: white;
          }

          .volunteer-opportunities h2 {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 4rem;
            font-family: 'Montserrat', sans-serif;
          }

          .opportunities-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }

          .opportunity-card {
            background: var(--light-bg);
            padding: 2.5rem;
            border-radius: 20px;
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }

          .opportunity-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(30, 58, 138, 0.15);
            border-color: var(--primary-color);
          }

          .opportunity-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
          }

          .opportunity-card h3 {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .opportunity-description {
            color: var(--text-gray);
            line-height: 1.6;
            margin-bottom: 2rem;
          }

          .opportunity-details {
            margin-bottom: 2rem;
          }

          .skills-section, .commitment-section {
            margin-bottom: 1.5rem;
          }

          .opportunity-details h4 {
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 0.5rem;
            font-family: 'Montserrat', sans-serif;
          }

          .skills-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .skills-list li {
            background: var(--primary-color);
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 500;
          }

          .commitment-section p {
            color: var(--text-gray);
            font-weight: 500;
            margin: 0;
          }

          .volunteer-btn {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Montserrat', sans-serif;
            width: 100%;
          }

          .volunteer-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3);
          }

          .how-to-join {
            padding: 100px 0;
            background: var(--light-bg);
          }

          .how-to-join h2 {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 4rem;
            font-family: 'Montserrat', sans-serif;
          }

          .steps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }

          .step {
            background: white;
            padding: 2.5rem 2rem;
            border-radius: 20px;
            text-align: center;
            position: relative;
            box-shadow: 0 10px 30px rgba(30, 58, 138, 0.1);
          }

          .step-number {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 800;
            margin: 0 auto 1.5rem;
            font-family: 'Montserrat', sans-serif;
          }

          .step h3 {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .step p {
            color: var(--text-gray);
            line-height: 1.6;
          }

          .volunteer-contact {
            padding: 100px 0;
            background: white;
          }

          .contact-content {
            text-align: center;
          }

          .contact-content h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .contact-content > p {
            font-size: 1.2rem;
            color: var(--text-gray);
            margin-bottom: 3rem;
          }

          .contact-methods {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
          }

          .contact-method {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: var(--light-bg);
            padding: 1.5rem 2rem;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(30, 58, 138, 0.1);
          }

          .method-icon {
            font-size: 2rem;
          }

          .method-info h4 {
            font-weight: 600;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
            font-family: 'Montserrat', sans-serif;
          }

          .method-info p {
            color: var(--text-gray);
            margin: 0;
          }

          .volunteer-note {
            background: var(--light-bg);
            padding: 2rem;
            border-radius: 15px;
            max-width: 600px;
            margin: 0 auto;
            text-align: left;
          }

          .volunteer-note h4 {
            color: var(--primary-color);
            font-weight: 700;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .volunteer-note ul {
            color: var(--text-gray);
            line-height: 1.6;
            margin: 0;
            padding-left: 1.5rem;
          }

          .volunteer-note li {
            margin-bottom: 0.5rem;
          }

          @media (max-width: 768px) {
            .volunteer-hero-content h1 {
              font-size: 2rem;
            }

            .volunteer-hero-content > p {
              font-size: 1rem;
            }

            .hero-stats {
              gap: 2rem;
            }

            .stat-number {
              font-size: 2rem;
            }

            .why-volunteer h2,
            .volunteer-opportunities h2,
            .how-to-join h2,
            .contact-content h2 {
              font-size: 2rem;
            }

            .benefits-grid,
            .opportunities-grid,
            .steps-grid {
              grid-template-columns: 1fr;
            }

            .contact-methods {
              flex-direction: column;
              gap: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .volunteer-hero {
              padding: 60px 0;
            }

            .why-volunteer,
            .volunteer-opportunities,
            .how-to-join,
            .volunteer-contact {
              padding: 60px 0;
            }

            .benefit-card,
            .opportunity-card,
            .step {
              padding: 2rem 1.5rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
