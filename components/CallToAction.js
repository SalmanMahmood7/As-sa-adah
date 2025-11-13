export default function CallToAction() {
  return (
    <section className="cta-section-main">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Support As-sa'adah Foundation's Islamic Welfare Mission
            </h2>
            <p className="cta-description">
              Join As-sa'adah Foundation in fulfilling our Islamic duty to serve humanity through comprehensive 
              welfare programs. Your support helps us provide education, healthcare, poverty relief, spiritual 
              guidance, and emergency assistance to those in need, following the principles of compassion and justice.
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <span>Give Zakat & Sadaqah</span>
              </div>
              <div className="cta-feature">
                <span>Volunteer for Welfare</span>
              </div>
              <div className="cta-feature">
                <span>Support Islamic Programs</span>
              </div>
              <div className="cta-feature">
                <span>Join Our Mission</span>
              </div>
            </div>
          </div>
          
          <div className="cta-actions">
            <button className="cta-primary-btn">Donate Now</button>
            <button className="cta-secondary-btn">Get Involved</button>
            <div className="cta-contact">
              <p>Want to learn more? <a href="/contact" className="contact-link">Contact us</a></p>
              <p className="cta-urgency">Together, we serve Allah and humanity!</p>
            </div>
          </div>
        </div>

        <div className="cta-stats">
          <div className="cta-stat">
            <span className="stat-number">Transparency:</span>
            <span className="stat-value">100% Halal & Accountable</span>
          </div>
          <div className="cta-stat">
            <span className="stat-number">Impact:</span>
            <span className="stat-value">25,000+ lives transformed</span>
          </div>
          <div className="cta-stat">
            <span className="stat-number">Mission:</span>
            <span className="stat-value">Comprehensive Islamic welfare</span>
          </div>
        </div>
      </div>
    </section>
  );
}
