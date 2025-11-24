import Head from "next/head";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Muhammad Uzair Karghatra",
    position: "Founder",
    description: "Mr. Muhammad Uzair Karghatra is a highly successful and renowned entrepreneur who laid the foundation for As-Saadah. As the owner of multiple Shariah Compliant business ventures, a reputable builder, and a technology expert who owns a prominent software house, his vision is uniquely grounded in both Islamic principles and modern industry. He founded As-Saadah with the urgent mission to evolve the Ummah technologically by educating Madaris graduates with essential modern IT skills. His dedicated goal is to bridge the gap between traditional Islamic education and the demands of the digital economy.",
    image: "/found.jpg"
  },
  {
    name: "Muzammil Athar",
    position: "Program Director",
    description: "Mr. Muzzamil Athar is a Distinguished IT Specialist and Advisor whose career spans over two decades in their Information Technology and Telecommunication sectors. An engineering graduate from UET Lahore with a Post Graduation in Business Administration from Hamdard University, he has held numerous leadership roles, including Country Head positions at top multinational companies like Huawei Technology and ZONG (China Mobile), served as the Business Head IT and Telecom at Muller & Phipps for 9 Years, currently working as consultant for Pakistan top companies for IT software and hardware business development and Business process automation. A dedicated philanthropist, Mr. Athar is an IT Advisor to the Governor House Sindh and actively supports the public sector as a consultant to National Skills University, JDC Pakistan, and Saylani Welfare Trust, IDEAS, Sahil Welfare Trust and many other organisations. He is widely recognized for his immense contributions to IT education, having established and run numerous free IT centers—including JDC Free IT City (for 100,000 students), centers at Sachal Rangers, Airport Security Force, and NED University—which have collectively trained thousands of Pakistani youth for the global entrepreneurial and IT market. His impactful services have earned him more than 20 International and National Awards, including twice receiving the IT Services award by the President of Pakistan and the Honorable Governor Sindh. On his doubtless Services for IT education specially for underprivileged areas, Government of Pakistan has awarded Honorary PHD Degree (Doctorate) through honourable Governor of Sindh at Governor House, Sindh. Recognizing his long contribution to public well-being and modern IT education, the Governor Sindh has recommended him for the conferment of the Tamgha-e-Imtiaz Civil Award. Drawing on his extensive background in Telecommunication Engineering and IT leadership, Mr. Athar drives the strategic programs necessary to realize the Founder's vision of evolving the Ummah with modern, global IT skills. His leadership is key to establishing As-Sa'adah Graduates as competitive players in the digital economy.",
    image: "/team-placeholder.jpg"
  },
  {
    name: "Molana Munir Ahmad Alvi",
    position: "Director of Islamic & Outreach Programs",
    description: "Molana Munir Ahmad Alvi is an Esteemed Islamic Scholar and a figure of international repute, renowned for his powerful oratory and unwavering commitment to global outreach. He is a devoted Muballigh (Preacher) and leads the Mission of Khatm-e-Nubuwwat (Finality of Prophethood), actively driving Dawah (preaching) initiatives. A prolific author, Molana Alvi has contributed significantly to Islamic literature, having penned several influential books, with a notable specialization in Seerah (the prophetic biography). His extensive missionary work has seen him travel across the globe, particularly through the African continent and other regions, successfully propagating the faith. As the Program Director for As-Saadah, Molana Alvi brings this deep scholarly and outreach experience to bear. His goal is to strategically equip Muslim youth with essential modern and digital skills, enabling them to effectively leverage technology and successfully advance the mission of preaching Islam digitally on a global scale.",
    image: "/team-placeholder.jpg"
  },
  {
    name: "Molana Abdul Quddoos Muhammadi",
    position: "Patronage",
    description: "Molana Abdul Quddoos Muhammadi is a celebrated Islamic Scholar and highly respected figure in Pakistan, holding the significant positions of Spokesperson and Director of Media for Wifaq ul Madaris al Arabia Pakistan. He is a national-level columnist and an international orator, regularly traveling to countries like Saudi Arabia, the Gulf States, and Europe to deliver scholarly addresses. Through the platform of Madaris Foundation Pakistan, his commitment to the welfare of both religious and modern educational students—specifically preparing them with soft and IT skills—serves as the driving force behind his dedicated Patronage for the unique mission of As-Saadah.",
    image: "/team-placeholder.jpg"
  },
  {
    name: "Dr. Syed Muhammad Usman Ghani",
    position: "Boot Camp Manager / Administrator",
    description: "Dr. Syed Muhammad Usman Ghani represents a perfect synthesis of both educational systems, blending authoritative traditional scholarship with rigorous modern academia. He first graduated as an Aalim from Wifaq ul Madaris Al Arabia Pakistan, establishing a foundational command of Islamic jurisprudence and sciences. This foundational period was followed by higher educational pursuits in Madinah al Munawwarah. He subsequently attained a high level of academic distinction by securing a highly selective, fully funded scholarship to complete his Ph.D. with distinction at the renowned International Islamic University Malaysia (IIUM). Dr. Ghani is a recognized and prolific figure in the academic community. He is the author of a specialized book on the Digital Economy and has contributed numerous impactful research papers to the field. His wide-ranging scholarly portfolio covers critical contemporary and historical themes, including: Financial Technology: Research on the jurisprudence of Crypto Currency and its regulatory implications. Systemic Studies: Deep analysis of the Islamic Economic System and Islamic Political System. Social Frameworks: Scholarly work focusing on the Family System in Islam. Core Specialization: His primary research focus lies in the intricate dynamics of the Ecopolitical Geography of Pakistan. He regularly presents his significant findings and engages as a key speaker at national and international conferences and seminars, ensuring As-Saadah maintains relevance at the global intellectual forefront. Drawing on this extensive, multidisciplinary background—spanning theology, advanced research, and contemporary geo-economic analysis—Dr. Ghani now serves as the Program Administrator, ensuring the effective conceptualization, design, and successful implementation of As-Saadah's unique program model.",
    image: "/team-placeholder.jpg"
  }
];

export default function Leadership() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Our Leadership - As-sa'adah Foundation</title>
        <meta
          name="description"
          content="Meet the visionary leaders behind As-sa'adah Foundation, dedicated to bridging Islamic scholarship with modern digital skills."
        />
      </Head>
      <Layout>
        <section className="leadership-page">
          <div className="leadership-container">
            <div className={`leadership-header ${isVisible ? 'animate-in' : ''}`}>
              <h1 className="page-title">Our Leadership</h1>
              <p className="page-description">
                Meet the visionary leaders who are bridging Islamic scholarship with modern digital innovation
              </p>
            </div>

            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name} 
                  className={`team-member ${isVisible ? 'animate-in' : ''}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="member-layout">
                    {/* Image Section (1/3) */}
                    <div className="member-image-section">
                      <div className="member-image-container">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="member-image"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCA3MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM5Y2EzYWYiLz4KPHBhdGggZD0iTTgwIDIyMGMwLTQwIDMwLTcwIDcwLTcwczcwIDMwIDcwIDc0IiBmaWxsPSIjOWNhM2FmIi8+CjwvdGV4dD4KPC9zdmc+Cg==';
                          }}
                        />
                      </div>
                    </div>

                    {/* Content Section (2/3) */}
                    <div className="member-content-section">
                      {/* Header Part */}
                      <div className="member-info-part">
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-position">{member.position}</p>
                      </div>

                      {/* Description Part */}
                      <div className="member-description-part">
                        <p className="member-description">{member.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style jsx>{`
          .leadership-page {
            min-height: 100vh;
            background: radial-gradient(ellipse at center top, #e8f5e8 0%, #f0f9ff 40%, #ffffff 100%);
            padding: 100px 0;
            position: relative;
          }

          .leadership-page::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%231a472a" fill-opacity="0.03"><circle cx="30" cy="30" r="1"/></g></g></svg>') repeat;
            pointer-events: none;
          }

          .leadership-container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 0 20px;
            position: relative;
            z-index: 1;
          }

          .leadership-header {
            text-align: center;
            margin-bottom: 5rem;
            opacity: 0;
            transform: translateY(50px);
            transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .leadership-header.animate-in {
            opacity: 1;
            transform: translateY(0);
          }

          .page-title {
            font-size: 4rem;
            font-weight: 900;
            background: linear-gradient(135deg, #1a472a, #22543d, #68d391);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.1;
            position: relative;
          }


          .page-description {
            font-size: 1.3rem;
            color: #4a5568;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.7;
            font-weight: 400;
          }

          .team-grid {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            max-width: 1400px;
            margin: 0 auto;
          }

          .team-member {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .team-member.animate-in {
            opacity: 1;
            transform: translateY(0);
          }

          .member-layout {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 3rem;
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 254, 0.9));
            backdrop-filter: blur(30px);
            border-radius: 25px;
            padding: 3rem;
            box-shadow: 
              0 25px 80px rgba(26, 71, 42, 0.15),
              0 15px 40px rgba(26, 71, 42, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.9);
            border: 2px solid rgba(255, 255, 255, 0.5);
            position: relative;
            overflow: hidden;
            min-height: 400px;
          }

          .member-layout::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, #1a472a, #68d391, #22543d);
            border-radius: 25px 25px 0 0;
          }

          .member-layout:hover {
            transform: translateY(-5px);
            box-shadow: 
              0 35px 100px rgba(26, 71, 42, 0.2),
              0 20px 50px rgba(26, 71, 42, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.9);
          }

          .member-image-section {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .member-image-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .member-image-container::before {
            content: '';
            position: absolute;
            top: -15px;
            left: -15px;
            right: -15px;
            bottom: -15px;
            background: linear-gradient(45deg, rgba(26, 71, 42, 0.1), rgba(104, 211, 145, 0.1));
            border-radius: 50%;
            z-index: -1;
            opacity: 0.7;
          }

          .member-image {
            width: 280px;
            height: 280px;
            border-radius: 50%;
            object-fit: cover;
            border: 6px solid rgba(255, 255, 255, 0.9);
            box-shadow: 
              0 20px 60px rgba(26, 71, 42, 0.25),
              0 10px 25px rgba(0, 0, 0, 0.15),
              inset 0 2px 0 rgba(255, 255, 255, 0.8);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            z-index: 2;
          }

          .member-layout:hover .member-image {
            transform: scale(1.05);
            box-shadow: 
              0 25px 80px rgba(26, 71, 42, 0.3),
              0 15px 35px rgba(0, 0, 0, 0.2),
              inset 0 2px 0 rgba(255, 255, 255, 0.9);
          }

          .member-content-section {
            display: grid;
            grid-template-rows: auto 1fr;
            gap: 2rem;
            padding: 1rem;
          }

          .member-info-part {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding-bottom: 1.5rem;
            border-bottom: 2px solid rgba(26, 71, 42, 0.1);
          }

          .member-name {
            font-size: 2.2rem;
            font-weight: 900;
            background: linear-gradient(135deg, #1a472a, #22543d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.2;
            position: relative;
          }

          .member-position {
            font-size: 1rem;
            color: #ffffff;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            background: linear-gradient(135deg, #1a472a, #22543d);
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            display: inline-block;
            box-shadow: 0 8px 25px rgba(26, 71, 42, 0.3);
            position: relative;
            overflow: hidden;
            margin: 0;
            align-self: flex-start;
          }

          .member-position::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.6s ease;
          }

          .member-layout:hover .member-position::before {
            left: 100%;
          }

          .member-description-part {
            display: flex;
            align-items: stretch;
          }

          .member-description {
            color: #5a6c7d;
            line-height: 1.8;
            font-size: 1rem;
            text-align: justify;
            margin: 0;
            padding: 0;
            white-space: normal;
            word-wrap: break-word;
            overflow-wrap: break-word;
            font-weight: 400;
            flex: 1;
            display: block;
          }

          @media (max-width: 1200px) {
            .member-layout {
              grid-template-columns: 1fr;
              gap: 2rem;
              text-align: center;
              min-height: auto;
            }

            .member-image-section {
              order: 1;
            }

            .member-content-section {
              order: 2;
              text-align: center;
            }

            .member-image {
              width: 200px;
              height: 200px;
            }

            .member-name {
              font-size: 1.8rem;
            }

            .member-position {
              align-self: center;
            }
          }

          @media (max-width: 768px) {
            .leadership-page {
              padding: 80px 0 60px;
            }

            .leadership-container {
              padding: 0 15px;
            }

            .leadership-header {
              margin-bottom: 3rem;
            }

            .page-title {
              font-size: 2.5rem;
            }

            .page-description {
              font-size: 1.1rem;
            }

            .team-grid {
              gap: 2rem;
            }

            .member-layout {
              padding: 2rem;
              gap: 1.5rem;
            }

            .member-image {
              width: 150px;
              height: 150px;
            }

            .member-name {
              font-size: 1.5rem;
            }

            .member-position {
              font-size: 0.9rem;
              padding: 0.6rem 1.2rem;
            }

            .member-description {
              font-size: 0.9rem;
              line-height: 1.7;
            }
          }

          @media (max-width: 480px) {
            .page-title {
              font-size: 2rem;
            }

            .member-layout {
              padding: 1.5rem;
            }

            .member-image {
              width: 120px;
              height: 120px;
            }

            .member-name {
              font-size: 1.3rem;
            }

            .member-description {
              font-size: 0.85rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}