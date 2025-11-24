import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

const bootcampCourses = [
  {
    title: "Artificial Intelligence (AI)",
    coreFocus: "Machine Learning, Data Science, AI Ethics",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="10" rx="2" ry="2"/>
        <circle cx="12" cy="5" r="2"/>
        <path d="m12 7-3 4"/>
        <path d="m15 11-3-4"/>
        <path d="M8 15h.01"/>
        <path d="M16 15h.01"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "Web & App Development",
    coreFocus: "Full-Stack, Mobile App Development (iOS/Android)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="14" x="2" y="3" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "Cloud & DevOps",
    coreFocus: "AWS/Azure/GCP, Automation, Infrastructure Management",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    title: "UI/UX Designing",
    coreFocus: "User-Centric Design, Accessibility, Wireframing",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"/>
        <path d="m14 7 3 3"/>
        <path d="M5 6v4"/>
        <path d="M19 14v4"/>
        <path d="M10 2v2"/>
        <path d="M7 8H3"/>
        <path d="M21 16h-4"/>
        <path d="M11 3H9"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  },
  {
    title: "Digital Marketing & E-Commerce",
    coreFocus: "SEO, SEM, Social Media Strategy, Online Business Development",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  {
    title: "Emerging Technologies",
    coreFocus: "Blockchain, Cryptography Fundamentals",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
  },
  {
    title: "Creative & Media",
    coreFocus: "Graphic Designing, Design & Animation, Media Studies",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="m9 9 5 12 1.774-5.226L21 14 9 9z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
  }
];

export default function Courses() {
  return (
    <>
      <Head>
        <title>As-Saadah IT Boot Camp Courses</title>
        <meta
          name="description"
          content="Explore As-Saadah Foundation's flagship IT Boot Camp courses empowering scholars with cutting-edge digital skills and ethical leadership."
        />
      </Head>
      <Layout>
        <section className="bootcamp-page">
          <div className="bootcamp-intro">
            <h1>As-Saadah IT Boot Camp</h1>
            <p className="subtitle">Flagship Religious Empowerment Initiative</p>
            <div className="intro-decoration"></div>
          </div>

          <div className="bootcamp-grid" role="list">
            {bootcampCourses.map((course, index) => (
              <article className="bootcamp-card" key={course.title} role="listitem" style={{'--delay': `${index * 0.1}s`}}>
                <div className="card-header" style={{background: course.gradient}}>
                  <div className="course-icon">{course.icon}</div>
                  <div className="card-badge">Course {index + 1}</div>
                </div>
                <div className="card-content">
                  <h3 className="bootcamp-card-title">{course.title}</h3>
                  <div className="bootcamp-card-body">
                    <p className="focus-label">Core Focus:</p>
                    <p className="focus-text">{course.coreFocus}</p>
                  </div>
                  <div className="card-footer">
                    <button className="learn-more-btn">Learn More</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="bootcamp-cta">
            <Link href="/programs" className="bootcamp-btn">
              <span>← Back to Programs</span>
            </Link>
          </div>
        </section>

        <style jsx>{`
          .bootcamp-page {
            padding: 100px 20px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e8f2ef 100%);
            color: #1a472a;
            min-height: 100vh;
          }

          .bootcamp-intro {
            max-width: 900px;
            margin: 0 auto 4rem;
            text-align: center;
            position: relative;
          }

          .bootcamp-intro h1 {
            font-size: 3.2rem;
            line-height: 1.2;
            margin-bottom: 1.5rem;
            font-family: 'Montserrat', sans-serif;
            color: #1a472a;
            font-weight: 800;
          }

          .bootcamp-intro .subtitle {
            font-size: 1.25rem;
            color: #4a5568;
            font-weight: 500;
            margin-bottom: 2rem;
          }

          .intro-decoration {
            width: 80px;
            height: 4px;
            background: linear-gradient(135deg, #1a472a, #22543d);
            margin: 0 auto;
            border-radius: 2px;
          }

          .bootcamp-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .bootcamp-card {
            background: #ffffff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(26, 71, 42, 0.1);
            transition: all 0.4s ease;
            animation: fadeInUp calc(0.6s + var(--delay)) ease-out both;
            position: relative;
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .bootcamp-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 30px 80px rgba(26, 71, 42, 0.15);
          }

          .card-header {
            padding: 2rem;
            position: relative;
            overflow: hidden;
          }

          .card-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: inherit;
            opacity: 0.9;
          }

          .course-icon {
            margin-bottom: 1rem;
            position: relative;
            z-index: 2;
            display: flex;
            justify-content: center;
            color: white;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
          }

          .course-icon svg {
            width: 48px;
            height: 48px;
            stroke: white;
            stroke-width: 2;
          }

          .card-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(10px);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            z-index: 2;
            position: relative;
          }

          .card-content {
            padding: 2rem;
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .bootcamp-card-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: #1a472a;
            margin-bottom: 1.5rem;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.3;
          }

          .bootcamp-card-body {
            flex: 1;
            margin-bottom: 1.5rem;
          }

          .focus-label {
            color: #1a472a;
            font-weight: 600;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 0.5rem !important;
          }

          .focus-text {
            color: #4a5568;
            line-height: 1.6;
            font-size: 0.95rem;
            margin: 0 !important;
          }

          .card-footer {
            margin-top: auto;
            padding-top: 1rem;
          }

          .learn-more-btn {
            width: 100%;
            padding: 0.75rem 1.5rem;
            background: transparent;
            color: #1a472a;
            border: 2px solid #1a472a;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .learn-more-btn:hover {
            background: #1a472a;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(26, 71, 42, 0.3);
          }

          .bootcamp-cta {
            margin-top: 4rem;
            display: flex;
            justify-content: center;
          }

          .bootcamp-btn {
            padding: 1rem 2.5rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            background: transparent;
            border: 2px solid #1a472a;
            color: #1a472a;
            text-decoration: none;
            transition: all 0.3s ease;
            font-family: 'Montserrat', sans-serif;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }

          .bootcamp-btn:hover {
            background: #1a472a;
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 12px 25px rgba(26, 71, 42, 0.2);
          }

          @media (max-width: 768px) {
            .bootcamp-page {
              padding: 80px 20px;
            }

            .bootcamp-intro h1 {
              font-size: 2.5rem;
            }

            .bootcamp-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            .bootcamp-card {
              margin: 0 auto;
              max-width: 400px;
            }

            .card-header, .card-content {
              padding: 1.5rem;
            }

            .course-icon svg {
              width: 40px;
              height: 40px;
            }

            .bootcamp-card-title {
              font-size: 1.25rem;
            }
          }

          @media (max-width: 480px) {
            .bootcamp-intro h1 {
              font-size: 2rem;
            }

            .bootcamp-intro .subtitle {
              font-size: 1.1rem;
            }

            .card-header, .card-content {
              padding: 1.25rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
