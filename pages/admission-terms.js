import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

const admissionSections = [
  {
    id: "A",
    title: "Eligibility Criteria for Admission",
    description: "Admission will only be granted to students who meet the following criteria:",
    items: [
      "Aalim Status and Complete Degree: Must have obtained a complete Aalim (Dars-e-Nizami) degree and certificate from an accredited Madrassah.",
      "Language Proficiency: Must be proficient in either Arabic or English (speech and writing).",
      "IQ Level: Must have satisfactory mental aptitude (IQ), as determined by the institute’s internal interview/test.",
      "Basic Computer Knowledge: Must know Microsoft Office and the Internet.",
      "Laptop: Each student must have their own personal laptop.",
      "Shari’ah Appearance: Must adhere to Islamic code of conduct (beard, dress, general presentation)."
    ]
  },
  {
    id: "B",
    title: "Adherence to Prayers and Daily Routines",
    items: [
      "Punctuality of Prayer: Students must offer all five daily prayers in congregation (Jama’ah) at the mosque or designated place, joining from the Takbeer Ula. Disciplinary action will be taken for absence without a valid Shari’ah excuse.",
      "Recitation and Dhikr: Regular Tilawat and adherence to prescribed Adhkar and Awrad are mandatory. Absence from activities after Fajr and Maghrib will be noted strictly.",
      "Adherence to the Given Schedule: Students must follow daily work hours, including class time, study time, mealtime, and sleeping time. Violation is considered a breach of discipline."
    ]
  },
  {
    id: "C",
    title: "Academic Regulations",
    subsections: [
      {
        subtitle: "Enrollment",
        text: "Admission Fee: PKR 5,000 (non-refundable) required upon arrival.",
        highlight: true
      },
      {
        subtitle: "Additional Academic Terms",
        list: [
          "Prohibition of Outside Work: No outside employment or activities allowed.",
          "Age Limit: Applicants must be under 30 years at the time of application.",
          "Certification of Merit: Honorary Certificate of Merit will be awarded monthly based on performance.",
          "Attendance: Minimum 90% attendance required. Prior written notice (Naazim) needed for absence.",
          "Examinations and Assignments: All exams and assignments are compulsory; failure may lead to cancellation of admission.",
          "Curricular Responsibilities: Students must complete all assigned academic work on time."
        ]
      }
    ]
  },
  {
    id: "D",
    title: "Hostel & Administrative Regulations",
    items: [
      "Protection of Property: Careful use of institute assets; fines apply for damages.",
      "Hostel Regulations: Follow arrival/departure timings and guest rules; prior permission needed for absence.",
      "Identity Card: ID must be kept and displayed at all times."
    ]
  },
  {
    id: "E",
    title: "Moral and Disciplinary Regulations",
    items: [
      "Mobile Phone Usage: Phones prohibited during classes and prayer/recitation times; violation results in confiscation.",
      "Etiquette and Respect: Maintain respect toward teachers, administration, and peers. Misconduct or abusive language is a serious offense.",
      "Political and Sectarian Activities: Strictly prohibited.",
      "Intoxicating Substances: Bringing or using intoxicants leads to immediate expulsion.",
      "Harassment and Violence: Any physical, verbal, or psychological violence is an unforgivable offense."
    ]
  },
  {
    id: "W",
    title: "Student’s Affidavit - Core Principles",
    items: [
      "Students affirm full adherence to Islamic principles, including regular Namaz and Tilawat.",
      "They are committed to Khatm-e-Nubuwwat and will not join movements against it.",
      "They will follow all institute rules, timings, and schedules.",
      "They agree to expulsion upon any violation."
    ]
  }
];

const disciplinaryNotice = {
  title: "Academic Performance and Disciplinary Action",
  items: [
    "Expulsion from institution.",
    "Payment of full monthly accommodation and meal costs for the corresponding period."
  ]
};

export default function AdmissionTerms() {
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (accepted) {
      router.push("/apply");
    }
  };
  return (
    <>
      <Head>
        <title>Admission Terms & Conditions | As-Saadah IT Boot Camp</title>
        <meta
          name="description"
          content="Review the official admission terms and conditions for the As-Saadah IT Boot Camp's Religious Empowerment Initiative."
        />
      </Head>
      <Layout>
        <section className="terms-hero">
          <h1>Eligibility Criteria for Admission</h1>
          <p>Foundational expectations for every scholar joining the As-Saadah IT Boot Camp.</p>
        </section>

        <section className="terms-document">
          <article className="document-sheet">
            {admissionSections.map((section) => (
              <div key={section.id} className="terms-section">
                <div className="section-heading">
                  <h2>{section.title}</h2>
                </div>
                {section.description && <p className="section-description">{section.description}</p>}

                {section.items && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.subsections &&
                  section.subsections.map((sub) => (
                    <div key={sub.subtitle} className="subsection">
                      <h3>{sub.subtitle}</h3>
                      {sub.text && (
                        <p className={`subsection-text ${sub.highlight ? "highlight" : ""}`}>
                          {sub.text}
                        </p>
                      )}
                      {sub.list && (
                        <ul>
                          {sub.list.map((subItem) => (
                            <li key={subItem}>{subItem}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
            ))}
            <div className="terms-final-notice">
              <h3>{disciplinaryNotice.title}</h3>
              <ul>
                {disciplinaryNotice.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="terms-consent">
              <span className="consent-note">I confirm that all information provided above is accurate.</span>
              <label className="consent-checkbox">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(event) => setAccepted(event.target.checked)}
                />
                <span>I accept all terms and conditions</span>
              </label>
              <button
                type="button"
                className={`consent-button ${accepted ? "active" : "disabled"}`}
                disabled={!accepted}
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </article>
        </section>

        <style jsx>{`
          .terms-hero {
            padding: 90px 20px 40px;
            text-align: center;
            background: linear-gradient(135deg, #1a472a, #22543d);
            color: white;
          }

          .terms-hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .terms-hero p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto 1.5rem;
          }

          .template-link {
            display: inline-block;
            padding: 0.85rem 2rem;
            border-radius: 999px;
            border: 2px solid rgba(255, 255, 255, 0.8);
            color: white;
            font-weight: 600;
            transition: all 0.2s ease;
          }

          .template-link:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
          }

          .terms-document {
            background: #f8f9fa;
            padding: 80px 20px 140px;
            display: flex;
            justify-content: center;
          }

          .document-sheet {
            background: white;
            border-radius: 24px;
            padding: 3rem;
            max-width: 960px;
            width: 100%;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(26, 71, 42, 0.08);
          }

          .terms-section + .terms-section {
            margin-top: 1.4rem;
            padding-top: 1.4rem;
            border-top: 1px solid rgba(26, 71, 42, 0.08);
          }

          .terms-card-content,
          .terms-section {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          }

          .section-heading {
            margin-bottom: 0.3rem;
          }

          .terms-card-content h2 {
            margin: 0;
            font-size: 1.6rem;
            color: #1a472a;
          }

          .section-description {
            margin: 0 0 0.6rem;
            color: #4a5568;
            line-height: 1.7;
          }

          .terms-card-content ul {
            margin: 0;
            padding-left: 1.2rem;
            color: #4a5568;
            line-height: 1.4;
          }

          .terms-card-content li {
            margin-bottom: 0.15rem;
          }

          .terms-card-content li:last-child {
            margin-bottom: 0;
          }

          .subsection {
            margin-top: 0.5rem;
          }

          .subsection h3 {
            margin-bottom: 0.15rem;
            font-size: 1.05rem;
            color: #22543d;
          }

          .subsection-text {
            margin: 0;
            color: #4a5568;
            line-height: 1.5;
            transition: background 0.25s ease, box-shadow 0.25s ease;
          }

          .subsection-text.highlight {
            background: #fff9c4;
            border-left: 4px solid #ecc94b;
            padding: 0.75rem 1rem;
            border-radius: 10px;
            color: #5c3702;
            font-weight: 600;
            box-shadow: 0 10px 25px rgba(236, 201, 75, 0.35);
          }

          .terms-final-notice {
            margin-top: 2rem;
            padding: 1.5rem;
            border-radius: 18px;
            background: #f1f5f9;
            border: 1px solid rgba(26, 71, 42, 0.1);
          }

          .terms-final-notice h3 {
            margin: 0 0 0.8rem;
            color: #1a472a;
            font-size: 1.2rem;
          }

          .terms-final-notice ul {
            margin: 0;
            padding-left: 1.1rem;
            color: #2d3748;
            line-height: 1.4;
          }

          .terms-consent {
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .consent-note {
            font-size: 0.95rem;
            color: #1f2933;
          }

          .consent-checkbox {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.95rem;
            color: #1f2933;
          }

          .consent-checkbox input {
            width: 16px;
            height: 16px;
            border: 1px solid #cbd5f5;
          }

          .consent-button {
            width: 100%;
            margin-top: 1rem;
            padding: 0.9rem;
            border-radius: 12px;
            font-weight: 600;
            border: none;
            transition: all 0.2s ease;
          }

          .consent-button.disabled {
            background: #e5e7eb;
            color: #6b7280;
            cursor: not-allowed;
            box-shadow: none;
          }

          .consent-button.active {
            background: linear-gradient(135deg, #1a472a, #22543d);
            color: white;
            box-shadow: 0 10px 20px rgba(26, 71, 42, 0.25);
          }

          .consent-button.active:hover {
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .terms-hero h1 {
              font-size: 2.2rem;
            }

            .document-sheet {
              padding: 2rem 1.5rem;
            }

            .terms-consent {
              align-items: stretch;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
