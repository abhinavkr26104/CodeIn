import { useState, useMemo } from "react";

const TEAM = [
  { name: "Aryan Mehta", role: "Full Stack Developer", desc: "Crafting robust web applications with React, Node.js, and cloud infrastructure.", portfolio: "https://aryanmehta.dev", initials: "AM" },
  { name: "Priya Sharma", role: "UI/UX Designer", desc: "Designing intuitive interfaces that balance aesthetics with seamless user experience.", portfolio: "https://priyasharma.design", initials: "PS" },
  { name: "Rahul Nair", role: "Mobile Developer", desc: "Building cross-platform mobile apps in Flutter and React Native.", portfolio: "https://rahulnair.io", initials: "RN" },
  { name: "Sneha Patel", role: "Data & AI Engineer", desc: "Turning data into insights — ML pipelines, dashboards, and AI-powered features.", portfolio: "https://snehapatel.ai", initials: "SP" },
];

const WORK = [
  { title: "HealthSync Platform", category: "Healthcare SaaS", desc: "End-to-end telemedicine platform serving 12 clinics across Bangalore. Reduced appointment wait time by 60%.", impact: "12K+ patients served", year: "2024", tags: ["React", "Node.js", "AWS"] },
  { title: "EduTrack LMS", category: "EdTech", desc: "Learning management system for a chain of 8 coaching institutes. Automated attendance, assessments, and progress reports.", impact: "3,200 students onboarded", year: "2024", tags: ["Flutter", "Firebase", "ML"] },
  { title: "RetailOS Dashboard", category: "Retail Analytics", desc: "Real-time inventory and sales dashboard for a D2C brand. Cut manual reporting time from 6 hours to under 10 minutes.", impact: "₹40L saved annually", year: "2023", tags: ["Next.js", "Python", "BigQuery"] },
  { title: "HireFlow ATS", category: "HR Tech", desc: "AI-powered applicant tracking system that screens and ranks candidates. Deployed at 3 mid-size companies.", impact: "70% faster hiring cycle", year: "2023", tags: ["React", "GPT-4", "PostgreSQL"] },
];

const DARK = {
  bg:           "#0b0f1a",
  surface:      "rgba(255,255,255,0.05)",
  surfaceHover: "rgba(255,255,255,0.1)",
  border:       "rgba(74,124,247,0.18)",
  borderHover:  "rgba(74,124,247,0.32)",
  text:         "#f5f8ff",
  textMuted:    "rgba(245,248,255,0.78)",
  textFaint:    "rgba(245,248,255,0.55)",
  accent:       "#4a7cf7",
  accentRgb:    "74,124,247",
  navBg:        "rgba(6,11,24,0.78)",
  inputBg:      "rgba(255,255,255,0.06)",
  divider:      "rgba(255,255,255,0.1)",
  btnText:      "#ffffff",
  toggleBg:     "rgba(255,255,255,0.08)",
  toggleBorder: "rgba(255,255,255,0.18)",
  toggleText:   "rgba(245,248,255,0.88)",
  toggleIcon:   "☀️",
  toggleLabel:  "Light",
};

const LIGHT = {
  bg:           "#f4f7ff",
  surface:      "rgba(74,124,247,0.05)",
  surfaceHover: "rgba(74,124,247,0.12)",
  border:       "rgba(74,124,247,0.16)",
  borderHover:  "#2355d4",
  text:         "#0e1830",
  textMuted:    "rgba(14,24,48,0.65)",
  textFaint:    "rgba(14,24,48,0.4)",
  accent:       "#2355d4",
  accentRgb:    "35,85,212",
  navBg:        "rgba(244,247,255,0.94)",
  inputBg:      "rgba(74,124,247,0.06)",
  divider:      "rgba(74,124,247,0.12)",
  btnText:      "#ffffff",
  toggleBg:     "rgba(74,124,247,0.1)",
  toggleBorder: "rgba(74,124,247,0.2)",
  toggleText:   "rgba(14,24,48,0.72)",
  toggleIcon:   "🌙",
  toggleLabel:  "Dark",
};

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", message: "" });

  const sections = useMemo(() => ["team", "work", "contact"], []);
  const t = dark ? DARK : LIGHT;

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => setForm({ name: "", email: "", whatsapp: "", message: "" });

  const sectionLabel = (txt) => (
    <div style={{ display: "flex", alignItems: "center", gap: 14, color: t.accent, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 20, transition: "color 0.35s" }}>
      <span style={{ width: 44, height: 1.75, borderRadius: 999, background: t.accent, boxShadow: `0 0 24px rgba(${t.accentRgb},0.14)` }} />
      {txt}
    </div>
  );

  const h2 = (txt) => (
    <h2 style={{ margin: "0 0 2rem", fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2.2rem,3.6vw,3.5rem)", lineHeight: 1.05, letterSpacing: "-0.04em", color: t.text, maxWidth: 760, transition: "color 0.35s" }}>{txt}</h2>
  );

  return (
    <div style={{ fontFamily: "'DM Sans','Helvetica Neue',sans-serif", background: t.bg, color: t.text, minHeight: "100vh", overflowX: "hidden", position: "relative", transition: "background 0.35s, color 0.35s" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle at 18% 18%, rgba(74,124,247,0.2), transparent 18%), radial-gradient(circle at 82% 10%, rgba(122,162,255,0.14), transparent 16%), radial-gradient(circle at 52% 78%, rgba(74,124,247,0.08), transparent 28%)", opacity: 0.72 }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'120\' height=\'120\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E')", opacity: 0.18 }} />

      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />

      <nav style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", margin: "0 auto", maxWidth: 1180, backdropFilter: "blur(20px)", background: t.navBg, borderBottom: `1px solid ${t.border}`, transition: "background 0.35s, border-color 0.35s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: 22, letterSpacing: "0.02em", background: "linear-gradient(135deg,#4a7cf7,#7aa2ff)", WebkitBackgroundClip: "text", color: "transparent" }}>CodeIn</span>
          <span style={{ fontSize: 12, letterSpacing: "0.24em", color: t.textMuted, textTransform: "uppercase" }}>Digital Collective</span>
        </div>

        <ul style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => scrollTo(sec)}
                onMouseEnter={() => setHoveredNav(sec)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{ background: "none", border: "none", color: t.textMuted, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", padding: 0, position: "relative", outline: "none", transition: "color 0.35s" }}
              >
                <span style={{ position: "relative", zIndex: 1 }}>{sec}</span>
                <span style={{ position: "absolute", left: 0, bottom: -5, width: "100%", height: 2, background: "linear-gradient(90deg,#4a7cf7,#7aa2ff)", opacity: hoveredNav === sec ? 1 : 0, transform: hoveredNav === sec ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "opacity 0.35s, transform 0.35s" }} />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setDark((prev) => !prev)}
          style={{ display: "inline-flex", alignItems: "center", gap: 10, borderRadius: 999, padding: "0.75rem 1rem", border: `1px solid ${t.toggleBorder}`, background: t.toggleBg, color: t.toggleText, cursor: "pointer", fontSize: 12, letterSpacing: "0.08em", transition: "all 0.35s" }}
        >
          <span style={{ fontSize: 16 }}>{t.toggleIcon}</span>
          <span>{t.toggleLabel}</span>
        </button>
      </nav>

      <main style={{ position: "relative", padding: "6rem 2rem 2rem", maxWidth: 1180, margin: "0 auto" }}>
        <section style={{ position: "relative", padding: "6.5rem 2rem 6rem", overflow: "hidden", borderRadius: 32, background: "rgba(255,255,255,0.02)", border: `1px solid rgba(255,255,255,0.08)`, boxShadow: "0 40px 120px rgba(3,9,23,0.34)", backdropFilter: "blur(24px)", marginBottom: "4rem", minHeight: "85vh", display: "grid", alignContent: "center" }}>
          <div style={{ position: "absolute", inset: "-30% -20% auto auto", width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle, rgba(74,124,247,0.26), transparent 58%)", filter: "blur(92px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: -80, top: 32, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(122,162,255,0.14), transparent 52%)", filter: "blur(24px)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 760, display: "grid", gap: 24 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: t.accent, fontWeight: 700, textShadow: `0 0 28px rgba(${t.accentRgb},0.15)` }}>
              <span style={{ width: 42, height: 1.75, background: t.accent, borderRadius: 999, display: "inline-block" }} />
              Premium digital agency experiences
            </div>

            <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(4.4rem,8vw,6.2rem)", letterSpacing: "-0.05em", lineHeight: 0.98, margin: 0, color: t.text, maxWidth: 760 }}>
              We build digital products that <span style={{ background: "linear-gradient(90deg,#4a7cf7,#7aa2ff)", WebkitBackgroundClip: "text", color: "transparent" }}>matter.</span>
            </h1>

            <p style={{ margin: 0, maxWidth: 600, fontSize: "clamp(1rem,1.05vw,1.15rem)", lineHeight: 1.95, color: t.textMuted }}>A tight-knit collective of designers, strategists, and engineers shaping high-impact digital experiences for startups and growing businesses.</p>

            <div style={{ display: "grid", gap: 28, maxWidth: 520 }}>
              <button onClick={() => scrollTo("contact")}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12, padding: "18px 42px", fontSize: 14, fontWeight: 700, borderRadius: 999, border: "none", color: "#fff", background: "linear-gradient(135deg,#4a7cf7,#7aa2ff)", boxShadow: "0 24px 88px rgba(74,124,247,0.18)", cursor: "pointer", transition: "transform 0.35s ease, box-shadow 0.35s ease" }}>
                Start a Project →
              </button>
              <div style={{ color: t.textMuted, fontSize: 14, lineHeight: 1.9, maxWidth: 520 }}>Let's discuss your vision, timeline, and how CodeIn can help you stand out with elegant product design and seamless engineering.</div>
            </div>
          </div>
        </section>

        <section id="team" style={{ padding: "4rem 0 4.5rem", maxWidth: 1180, margin: "0 auto" }}>
          {sectionLabel("The Team")}
          {h2("People behind the work")}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 28 }}>
            {TEAM.map((m, i) => (
              <a key={i} href={m.portfolio} target="_blank" rel="noopener noreferrer"
                style={{ position: "relative", overflow: "hidden", borderRadius: 30, padding: "2.25rem", textDecoration: "none", color: "inherit", background: t.surface, border: `1px solid ${t.border}`, boxShadow: hoveredCard === i ? `0 36px 90px rgba(74,124,247,0.16)` : `0 20px 52px rgba(3,9,23,0.14)`, transform: hoveredCard === i ? "translateY(-10px) scale(1.015)" : "translateY(0)", transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s" }}
                onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)}>
                <div style={{ position: "absolute", inset: 0, opacity: hoveredCard === i ? 1 : 0, background: "linear-gradient(135deg, rgba(74,124,247,0.18), transparent 58%)", pointerEvents: "none", transition: "opacity 0.35s" }} />
                <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, marginBottom: 20 }}>
                  <div style={{ width: 68, height: 68, borderRadius: "50%", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 18, color: t.accent, border: `1px solid ${t.accent}`, background: "rgba(74,124,247,0.08)" }}>{m.initials}</div>
                  <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: t.accent, fontWeight: 700 }}>Portfolio</div>
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: "'Playfair Display',Georgia,serif", fontSize: "1.2rem", lineHeight: 1.08, color: t.text }}>{m.name}</h3>
                  <div style={{ margin: "12px 0", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: t.accent }}>{m.role}</div>
                  <p style={{ margin: 0, color: t.textMuted, fontSize: 14, lineHeight: 1.8 }}>{m.desc}</p>
                </div>
                <div style={{ position: "relative", zIndex: 1, marginTop: 26, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: t.accent, display: "inline-flex", alignItems: "center", gap: 8 }}>View Portfolio →</div>
              </a>
            ))}
          </div>
        </section>

        <section id="work" style={{ padding: "4rem 0 4.5rem", maxWidth: 1180, margin: "0 auto" }}>
          {sectionLabel("Selected Work")}
          {h2("Projects & impact")}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 28 }}>
            {WORK.map((w, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden", borderRadius: 30, padding: "2.25rem", background: t.surface, border: `1px solid ${t.border}`, boxShadow: hoveredCard === `work-${i}` ? `0 36px 90px rgba(74,124,247,0.16)` : `0 20px 56px rgba(3,9,23,0.16)`, transform: hoveredCard === `work-${i}` ? "translateY(-10px) scale(1.015)" : "translateY(0)", transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s" }}
                onMouseEnter={() => setHoveredCard(`work-${i}`)} onMouseLeave={() => setHoveredCard(null)}>
                <div style={{ position: "absolute", inset: 0, background: hoveredCard === `work-${i}` ? "linear-gradient(180deg, rgba(74,124,247,0.16), transparent 55%)" : "transparent", transition: "background 0.35s" }} />
                <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", gap: 14, marginBottom: 22 }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: t.textFaint }}>{w.category}</span>
                  <span style={{ fontSize: 11, color: t.textFaint }}>{w.year}</span>
                </div>
                <h3 style={{ margin: 0, fontFamily: "'Playfair Display',Georgia,serif", fontSize: "1.65rem", lineHeight: 1.15, color: t.text, maxWidth: 360 }}>{w.title}</h3>
                <p style={{ margin: "20px 0 26px", color: t.textMuted, lineHeight: 1.78, fontSize: 14 }}>{w.desc}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 16px", borderRadius: 999, background: `rgba(${t.accentRgb},0.14)`, border: `1px solid rgba(${t.accentRgb},0.24)`, color: t.accent, fontSize: 12, fontWeight: 700, letterSpacing: "0.04em" }}>⚡ {w.impact}</div>
                <div style={{ marginTop: 26, display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {w.tags.map((tag) => (
                    <span key={tag} style={{ display: "inline-flex", alignItems: "center", padding: "7px 12px", borderRadius: 999, fontSize: 11, color: t.textMuted, background: "rgba(255,255,255,0.05)", border: `1px solid ${t.border}` }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ padding: "4rem 0 6rem", maxWidth: 760, margin: "0 auto" }}>
          {sectionLabel("Contact")}
          {h2("Let's build something")}
          <div style={{ display: "grid", gap: 24 }}>
            {[
              { label: "Your Name *", name: "name", type: "text", placeholder: "Arjun Verma" },
              { label: "Email Address *", name: "email", type: "email", placeholder: "arjun@company.com" },
              { label: "WhatsApp / Phone", name: "whatsapp", type: "text", placeholder: "+91 98765 43210" },
            ].map((f) => (
              <div key={f.name} style={{ display: "grid", gap: 12 }}>
                <label style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: t.textMuted }}>{f.label}</label>
                <input name={f.name} type={f.type} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder}
                  style={{ width: "100%", background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 20, padding: "18px 20px", fontSize: 15, color: t.text, outline: "none", boxSizing: "border-box", fontFamily: "'DM Sans',sans-serif", transition: "border-color 0.35s, box-shadow 0.35s, background 0.35s", boxShadow: "inset 0 0 0 rgba(0,0,0,0)", caretColor: t.accent }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = `0 0 0 4px rgba(${t.accentRgb},0.12)`}
                  onBlur={(e) => e.currentTarget.style.boxShadow = "inset 0 0 0 rgba(0,0,0,0)"} />
              </div>
            ))}
            <div style={{ display: "grid", gap: 12 }}>
              <label style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: t.textMuted }}>Tell us about your project *</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="What are you building? Timeline and budget?"
                style={{ width: "100%", background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 20, padding: "18px 20px", fontSize: 15, color: t.text, outline: "none", boxSizing: "border-box", fontFamily: "'DM Sans',sans-serif", resize: "vertical", minHeight: 150, transition: "border-color 0.35s, box-shadow 0.35s, background 0.35s", boxShadow: "inset 0 0 0 rgba(0,0,0,0)", caretColor: t.accent }}
                onFocus={(e) => e.currentTarget.style.boxShadow = `0 0 0 4px rgba(${t.accentRgb},0.12)`}
                onBlur={(e) => e.currentTarget.style.boxShadow = "inset 0 0 0 rgba(0,0,0,0)"} />
            </div>
            <button onClick={handleSubmit}
              style={{ alignSelf: "start", padding: "18px 34px", borderRadius: 999, border: "none", background: "linear-gradient(135deg,#4a7cf7,#7aa2ff)", color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", cursor: "pointer", boxShadow: "0 28px 90px rgba(74,124,247,0.26)", transition: "transform 0.35s ease, box-shadow 0.35s ease" }}>
              Send Message →
            </button>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: `1px solid ${t.divider}`, padding: "2rem 2rem 3rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 24, maxWidth: 1180, margin: "0 auto", color: t.textFaint, fontSize: 12, letterSpacing: "0.12em" }}>
        <span>© 2025 CodeIn · Bangalore, India</span>
        <span>Built by the collective</span>
      </footer>
    </div>
  );
}
