import { socialLinks } from "../lib/socialLinks";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admission-terms" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" }
];

const contactCards = [
  {
    title: "Phone",
    value: "+92 312 2221280",
    href: "tel:+923122221280",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.77 19.77 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.17 9.81 19.77 19.77 0 0 1 .1 1.18 2 2 0 0 1 2.11-.99h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6 6.91a16 16 0 0 0 7.09 7.09l1.27-1.33a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
      </svg>
    )
  },
  {
    title: "Email",
    value: "assaadahcontact525@gmail.com",
    href: "mailto:assaadahcontact525@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.73a2 2 0 0 1-2.06 0L2 7" />
      </svg>
    )
  },
  {
    title: "Address",
    value: "As-sa'adah Foundation Center",
    href: null,
    details: [
      "Q634+452, Chaman Zar Hill",
      "Islamabad, Pakistan"
    ],
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 4.993-5.54 10.193-7.4 11.799a1 1 0 0 1-1.2 0C9.54 20.193 4 14.993 4 10a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }
];


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay" />
      <div className="footer-inner">
        <div className="footer-hero">
          <div className="footer-hero-text">
            <span className="footer-badge">Since 2015</span>
            <h2>Faith, Knowledge &amp; Community Impact</h2>
            <p>
              As-sa&apos;adah Foundation nurtures socially conscious scholars who blend classical Islamic wisdom
              with modern skills to uplift underserved communities.
            </p>
          </div>
          <div className="footer-hero-cta">
            <a href="/donate" className="footer-btn primary">Donate Now</a>
            <a href="/contact" className="footer-btn secondary">Contact Us</a>
          </div>
        </div>

        <div className="footer-grid">
          <section className="footer-block footer-about">
            <div className="footer-logo">
              <img src="/logo.png" alt="As-sa'adah Foundation" />
              <div>
                <h3>As-sa&apos;adah Foundation</h3>
                <p className="footer-description">
                  Comprehensive Islamic welfare organization delivering education, healthcare, and socio-economic support.
                </p>
              </div>
            </div>
            <div className="footer-mission">
              <p>&quot;And whoever saves a life, it is as if he has saved all of mankind.&quot;</p>
              <span>- Quran 5:32</span>
            </div>
            <div className="social-links">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="social-link"
                >
                  <item.Icon size={22} />
                </a>
              ))}
            </div>
            <div className="about-contact-compact">
              <h4>Reach Us</h4>
              <ul className="contact-list compact">
                {contactCards.map((card) => (
                  <li className="contact-list-item" key={`compact-${card.title}`}>
                    <span className="contact-icon">{card.icon}</span>
                    <div className="contact-text">
                      <span className="contact-title">{card.title}</span>
                      {card.href ? (
                        <a href={card.href} className="contact-value">{card.value}</a>
                      ) : (
                        <span className="contact-value">{card.value}</span>
                      )}
                      {card.details && (
                        <span className="contact-muted">{card.details.join(" • ")}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="footer-block footer-links-card">
            <h4>Quick Links</h4>
            <div className="link-card-grid">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="link-card">
                  <span>{link.label}</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <p>© 2025 As-sa&apos;adah Foundation. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms">Terms of Service</a>
            <span>•</span>
            <a href="/transparency">Transparency Report</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          background: linear-gradient(135deg, rgba(10, 31, 16, 0.9), rgba(6, 17, 10, 0.9)),
            url('/footer image.jpg') center/cover no-repeat;
          color: white;
          padding: 40px 0 15px;
          overflow: hidden;
        }

        .footer-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(6, 35, 16, 0.85), rgba(8, 51, 24, 0.75)),
            radial-gradient(circle at top right, rgba(52, 211, 153, 0.25), transparent 45%),
            radial-gradient(circle at bottom left, rgba(34, 197, 94, 0.2), transparent 40%);
          z-index: 0;
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          width: min(1200px, 100%);
          margin: 0 auto;
          padding: 0 18px;
        }

        .footer-hero {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.1rem 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(8px);
          flex-wrap: wrap;
        }

        .footer-hero-text {
          flex: 1 1 320px;
          min-width: 0;
        }

        .footer-hero-text h2 {
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          margin: 0.6rem 0;
          font-family: 'Montserrat', sans-serif;
        }

        .footer-hero-text p {
          margin: 0;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
        }

        .footer-badge {
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.22em;
          color: rgba(255, 255, 255, 0.8);
        }

        .footer-hero-cta {
          display: flex;
          flex: 1 1 260px;
          align-items: center;
          gap: 0.75rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .footer-btn {
          padding: 0.85rem 1.8rem;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border 0.25s ease;
        }

        .footer-btn.primary {
          background: linear-gradient(135deg, #34d399, #059669);
          color: #04150c;
          box-shadow: 0 12px 25px rgba(52, 211, 153, 0.35);
        }

        .footer-btn.secondary {
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: white;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.2rem;
          margin-top: 1.4rem;
          align-items: stretch;
        }

        .footer-block {
          background: rgba(255, 255, 255, 0.02);
          padding: 1.2rem;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .footer-about {
          grid-column: span 2;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 900px) {
          .footer-about {
            grid-column: span 1;
          }
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.9rem;
        }

        .footer-logo img {
          height: 64px;
          width: auto;
          filter: brightness(0) invert(1);
        }

        .footer-logo h3 {
          margin: 0;
          font-size: 1.3rem;
        }

        .footer-description {
          margin: 0.75rem 0 1rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
        }

        .footer-mission {
          background: rgba(255, 255, 255, 0.04);
          padding: 1rem;
          border-radius: 14px;
          border-left: 4px solid #34d399;
          font-style: italic;
          margin-bottom: 1rem;
        }

        .footer-mission p {
          margin: 0 0 0.4rem;
        }

        .footer-mission span {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.85rem;
        }

        .social-links {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s ease, border 0.25s ease, transform 0.25s ease;
        }

        .social-link svg {
          width: 22px;
          height: 22px;
          display: block;
        }

        .about-contact-compact {
          margin-top: 1.5rem;
          padding-top: 1.2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .about-contact-compact h4 {
          margin: 0 0 0.8rem;
          color: #99f6e4;
        }

        .contact-list.compact {
          gap: 0.5rem;
        }

        .footer-block h4 {
          font-size: 1.1rem;
          margin: 0 0 0.6rem;
          color: #99f6e4;
          flex-shrink: 0;
        }

        .link-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 0.75rem;
          flex: 1;
        }

        .link-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
          padding: 0.6rem 0.9rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
          text-decoration: none;
          transition: border 0.25s ease, background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }

        .contact-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-list-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.8rem;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contact-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(52, 211, 153, 0.95), rgba(16, 185, 129, 0.85));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-icon svg {
          width: 18px;
          height: 18px;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          gap: 0.05rem;
        }

        .contact-title {
          margin: 0;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.65);
        }

        .contact-value {
          color: white;
          font-weight: 600;
          text-decoration: none;
        }

        .contact-muted {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.65);
        }

        .footer-bottom {
          margin-top: 1.5rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
        }

        @media (max-width: 1200px) {
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
          }
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .footer-inner {
            padding: 0 12px;
          }

          .footer-hero {
            text-align: center;
            padding: 1rem;
            flex-direction: column;
          }

          .footer-hero-text h2 {
            font-size: 1.6rem;
          }

          .footer-hero-cta {
            justify-content: center;
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }

          .footer-btn {
            width: 100%;
            text-align: center;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-block {
            text-align: center;
            padding: 1rem;
          }

          .footer-logo {
            flex-direction: column;
          }

          .link-card-grid {
            grid-template-columns: 1fr;
          }

          .contact-list-item {
            justify-content: center;
            flex-wrap: wrap;
          }

          .contact-text {
            align-items: center;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer-inner {
            padding: 0 10px;
          }

          .footer-hero {
            padding: 0.85rem;
          }

          .footer-block {
            padding: 0.85rem;
          }

          .contact-list-item {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
