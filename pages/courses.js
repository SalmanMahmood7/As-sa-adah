import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

const bootcampCourses = [
  {
    title: "Artificial Intelligence (AI)",
    coreFocus: "Machine Learning, Data Science, AI Ethics"
  },
  {
    title: "Web & App Development",
    coreFocus: "Full-Stack, Mobile App Development (iOS/Android)"
  },
  {
    title: "Cloud & DevOps",
    coreFocus: "AWS/Azure/GCP, Automation, Infrastructure Management"
  },
  {
    title: "UI/UX Designing",
    coreFocus: "User-Centric Design, Accessibility, Wireframing"
  },
  {
    title: "Digital Marketing & E-Commerce",
    coreFocus: "SEO, SEM, Social Media Strategy, Online Business Development"
  },
  {
    title: "Emerging Technologies",
    coreFocus: "Blockchain, Cryptography Fundamentals"
  },
  {
    title: "Creative & Media",
    coreFocus: "Graphic Designing, Design & Animation, Media Studies"
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
            <h1>As-Saadah IT Boot Camp is the flagship Religious Empowerment Initiative</h1>
          </div>

          <div className="bootcamp-grid" role="list">
            {bootcampCourses.map((course) => (
              <article className="bootcamp-card" key={course.title} role="listitem">
                <h3 className="bootcamp-card-title">{course.title}</h3>
                <div className="bootcamp-card-body">
                  <p>
                    <strong>Core Focus:</strong> {course.coreFocus}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="bootcamp-cta">
            <Link href="/programs" className="bootcamp-btn secondary">← Back to Programs</Link>
          </div>
        </section>

        <style jsx>{`
          .bootcamp-page {
            padding: 100px 20px;
            background: #f8f9fa;
            color: #1a472a;
          }

          .bootcamp-intro {
            max-width: 900px;
            margin: 0 auto 3rem;
            text-align: center;
          }

          .bootcamp-intro h1 {
            font-size: 3rem;
            line-height: 1.2;
            margin-bottom: 1.5rem;
            font-family: 'Montserrat', sans-serif;
            color: #1a472a;
          }

          .bootcamp-intro p {
            font-size: 1.15rem;
            color: #4a5568;
          }

          .bootcamp-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.75rem;
          }

          .bootcamp-card {
            background: #ffffff;
            border: 1px solid rgba(26, 71, 42, 0.15);
            border-radius: 18px;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            box-shadow: 0 15px 40px rgba(26, 71, 42, 0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            min-height: 220px;
          }

          .bootcamp-card:hover {
            transform: translateY(-6px);
            border-color: rgba(26, 71, 42, 0.35);
            box-shadow: 0 25px 55px rgba(26, 71, 42, 0.15);
          }

          .bootcamp-card-title {
            font-size: 1.35rem;
            margin: 0;
            color: #1a472a;
          }

          .bootcamp-card-body p {
            margin-bottom: 0;
            color: #4a5568;
            line-height: 1.5;
            text-align: left;
          }

          .bootcamp-card-body strong {
            color: #1a472a;
            font-weight: 700;
          }

          .bootcamp-cta {
            margin-top: 2.5rem;
            display: flex;
            justify-content: center;
          }

          .bootcamp-btn {
            padding: 0.85rem 2rem;
            border-radius: 999px;
            font-weight: 600;
            font-size: 1rem;
            border: 2px solid #1a472a;
            color: #1a472a;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .bootcamp-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(26, 71, 42, 0.15);
          }

          @media (max-width: 768px) {
            .bootcamp-page {
              padding: 70px 15px;
            }

            .bootcamp-intro h1 {
              font-size: 2.2rem;
            }

            .bootcamp-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
