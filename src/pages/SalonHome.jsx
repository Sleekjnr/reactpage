import React, { useEffect, useState } from "react";
import "./SalonHome.css";

const services = [
  {
    title: "Cut & style",
    text: "Precision cuts, blowouts, and everyday looks tailored to your face shape and lifestyle.",
  },
  {
    title: "Color",
    text: "Balayage, highlights, glossing, and corrective color with healthy, luminous results.",
  },
  {
    title: "Treatments",
    text: "Deep conditioning, scalp care, and bond-building services for stronger, shinier hair.",
  },
  {
    title: "Special occasion",
    text: "Bridal and event styling so you feel confident from the first photo to the last dance.",
  },
];

const gallery = [
  {
    title: "Soft balayage",
    style: "Warm caramel tones, glossy finish",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Silk press",
    style: "Smooth, bouncy movement",
    img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a46f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Signature bob",
    style: "Clean shape with soft texture",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Natural curls",
    style: "Definition + hydration",
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Blowout",
    style: "Volume, shine, and lasting hold",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Bridal updo",
    style: "Elegant pins, soft face framing",
    img: "https://images.unsplash.com/photo-1520962917960-30bdaac9a873?auto=format&fit=crop&w=1400&q=80",
  },
];

const SalonHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="salon">
      <header className="salon-nav">
        <div className="salon-nav-inner">
          <a className="salon-logo" href="#top">
            HAIRS AFFAIRS
          </a>
          <button
            type="button"
            className="salon-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="salon-mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="salon-menu-icon" aria-hidden="true" />
          </button>

          <nav className="salon-links" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a className="salon-cta" href="#contact">
              Book
            </a>
          </nav>
        </div>

        <nav
          id="salon-mobile-menu"
          className={`salon-mobile ${menuOpen ? "is-open" : ""}`}
          aria-label="Mobile"
        >
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a className="salon-mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Book
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="salon-hero" aria-labelledby="hero-heading">
          <div className="salon-hero-copy">
            <p className="salon-eyebrow">Hair salon</p>
            <h1 id="hero-heading">Hair that feels like you</h1>
            <p className="salon-lede">
              Warm, skilled stylists and a calm space—so your visit is as restorative as your
              new look.
            </p>
            <div className="salon-hero-actions">
              <a className="salon-btn salon-btn-primary" href="#contact">
                Request an appointment
              </a>
              <a className="salon-btn salon-btn-ghost" href="tel:+15555551234">
                Call (555) 555-1234
              </a>
            </div>
          </div>
          <div className="salon-hero-visual" role="img" aria-label="Salon interior atmosphere" />
        </section>

        <section id="services" className="salon-section salon-services" aria-labelledby="services-heading">
          <div className="salon-section-head">
            <h2 id="services-heading">Services</h2>
            <p>Everything we offer, explained simply—ask us for a personalized recommendation.</p>
          </div>
          <ul className="salon-service-grid">
            {services.map((s) => (
              <li key={s.title} className="salon-service-card">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="gallery" className="salon-section salon-gallery" aria-labelledby="gallery-heading">
          <div className="salon-section-head">
            <h2 id="gallery-heading">Gallery</h2>
            <p>
              A few popular looks. Replace these images with your own photos and keep only the style
              names if you prefer.
            </p>
          </div>
          <ul className="salon-gallery-grid">
            {gallery.map((g) => (
              <li key={g.title} className="salon-gallery-card">
                <div
                  className="salon-gallery-img"
                  style={{ backgroundImage: `url(${g.img})` }}
                  role="img"
                  aria-label={g.title}
                />
                <div className="salon-gallery-meta">
                  <h3>{g.title}</h3>
                  <p>{g.style}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="salon-section salon-about" aria-labelledby="about-heading">
          <div className="salon-about-panel">
            <h2 id="about-heading">Our salon</h2>
            <p>
              HAIRS AFFAIRS is a small team obsessed with healthy hair and honest advice. We
              listen first, then cut, color, and style with techniques that suit your texture
              and routine—not just what is trending.
            </p>
            <p>
              Replace this copy with your real story, team names, and certifications. Add photos
              of your space on social or in the gallery when you are ready.
            </p>
          </div>
        </section>

        <section id="contact" className="salon-section salon-contact" aria-labelledby="contact-heading">
          <div className="salon-contact-card">
            <h2 id="contact-heading">Visit us</h2>
            <dl className="salon-hours">
              <div>
                <dt>Tuesday – Saturday</dt>
                <dd>9:00 a.m. – 7:00 p.m.</dd>
              </div>
              <div>
                <dt>Sunday & Monday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
            <address className="salon-address">
              1200 Maple Avenue, Suite 4
              <br />
              Your City, ST 00000
            </address>
            <p className="salon-phone">
              <a href="tel:+15555551234">(555) 555-1234</a>
            </p>
            <p className="salon-note">
              Booking: call or text this number. Online booking can plug in here later.
            </p>
          </div>
        </section>
      </main>

      <footer className="salon-footer">
        <p>© {new Date().getFullYear()} HAIRS AFFAIRS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SalonHome;
