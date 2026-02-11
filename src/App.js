import React, { useEffect, useRef } from 'react';
import { 
  Zap, 
  Target, 
  Users, 
  ShieldCheck, 
  LayoutDashboard, 
  Cpu, 
  Globe, 
  Trophy, 
  CheckCircle, 
  ArrowRight,
  MousePointer2,
  Rocket
} from 'lucide-react';

const BrochureStyles = () => (
  <style>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg-color: #020617;
      --card-bg: #0f172a;
      --accent-cyan: #22d3ee;
      --accent-blue: #3b82f6;
      --text-main: #f1f5f9;
      --text-muted: #94a3b8;
      --border-color: #1e293b;
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .app-wrapper {
      min-height: 100vh;
      background-color: var(--bg-color);
      padding: 2rem;
      color: var(--text-main);
    }

    .brochure-container {
      max-width: 1152px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    @media (min-width: 1024px) {
      .brochure-container {
        grid-template-columns: 1fr 1fr;
      }
    }

    .side-panel {
      position: relative;
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 1.5rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      min-height: 1000px;
      box-shadow: 0 25px 50px -12px rgba(6, 182, 212, 0.1);
    }

    .tech-pattern {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.1;
      pointer-events: none;
      background-image: radial-gradient(circle at 2px 2px, var(--accent-cyan) 1px, transparent 0);
      background-size: 24px 24px;
    }

    .header-section {
      position: relative;
      padding: 4rem 2.5rem 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .logo-container {
      width: 6rem;
      height: 6rem;
      margin-bottom: 1.5rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.4));
    }

    .logo-container svg {
      width: 100%;
      height: 100%;
    }

    .main-title {
      font-size: 3rem;
      font-weight: 900;
      margin-bottom: 0.5rem;
      letter-spacing: -0.025em;
    }

    .accent-text {
      color: var(--accent-cyan);
    }

    .platform-tag {
      color: var(--accent-cyan);
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }

    .hero-statement {
      font-size: 1.5rem;
      font-weight: bold;
      max-width: 28rem;
      line-height: 1.25;
    }

    .pill-container {
      margin-top: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
    }

    .pill {
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      background: rgba(34, 211, 238, 0.1);
      border: 1px solid rgba(34, 211, 238, 0.2);
      color: var(--accent-cyan);
      font-size: 0.625rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    .content-body {
      padding: 0 2.5rem 2.5rem;
      flex-grow: 1;
    }

    .content-body-top-pad {
      padding-top: 2.5rem;
    }

    .section-header {
      margin-bottom: 1.5rem;
    }

    .section-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--accent-cyan);
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }

    .section-subtitle {
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.2;
    }

    .underline {
      width: 3rem;
      height: 4px;
      background: linear-gradient(90deg, var(--accent-cyan), var(--accent-blue));
      margin-top: 0.5rem;
      border-radius: 9999px;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .icon-box-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: rgba(30, 41, 59, 0.5);
      padding: 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid rgba(51, 65, 85, 0.5);
      font-size: 0.875rem;
    }

    .chaos-box {
      margin-bottom: 2.5rem;
      padding: 1.5rem;
      background: linear-gradient(to bottom right, #1e293b, #0f172a);
      border: 1px solid rgba(34, 211, 238, 0.2);
      border-radius: 1rem;
    }

    .chaos-title {
      color: #22d3ee;
      font-weight: bold;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .line-through {
      text-decoration: line-through;
      color: var(--text-muted);
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .solution-highlight {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--accent-cyan);
      font-weight: bold;
      font-size: 0.875rem;
      background: rgba(34, 211, 238, 0.05);
      padding: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid rgba(34, 211, 238, 0.1);
    }

    .workflow-timeline {
      position: relative;
      margin-top: 1.5rem;
    }

    .workflow-timeline::before {
      content: '';
      position: absolute;
      left: 0.75rem;
      top: 0.5rem;
      bottom: 0.5rem;
      width: 2px;
      background: #1e293b;
    }

    .timeline-item {
      position: relative;
      padding-left: 2.5rem;
      margin-bottom: 1.5rem;
    }

    .timeline-dot {
      position: absolute;
      left: 0;
      top: 0.25rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 9999px;
      background: var(--card-bg);
      border: 2px solid var(--accent-cyan);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      font-size: 0.625rem;
      font-weight: bold;
      color: var(--accent-cyan);
    }

    .timeline-step-text {
      margin: 0;
      font-size: 0.875rem;
      font-weight: 600;
    }

    .footer-bar {
      background-color: var(--accent-cyan);
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--bg-color);
    }

    .footer-impact {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 900;
      font-style: italic;
      font-size: 1.125rem;
    }

    .footer-divider {
      width: 1px;
      height: 2rem;
      background: rgba(0, 0, 0, 0.1);
    }

    .footer-ready {
      font-size: 0.75rem;
      font-weight: bold;
      text-align: right;
      text-transform: uppercase;
    }

    .stakeholder-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    @media (min-width: 768px) {
      .stakeholder-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    .feature-card {
      background: rgba(15, 23, 42, 0.5);
      border: 1px solid var(--border-color);
      padding: 1rem;
      border-radius: 0.75rem;
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .card-title {
      margin: 0;
      font-weight: bold;
    }

    .icon-container {
      padding: 0.5rem;
      background: rgba(34, 211, 238, 0.1);
      border-radius: 0.5rem;
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .feature-list-item {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      color: var(--text-muted);
      font-size: 0.75rem;
      margin-bottom: 0.5rem;
    }

    .feature-list-icon {
      margin-top: 2px;
      flex-shrink: 0;
    }

    .vision-panel {
      margin-top: 1rem;
      padding: 1rem;
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 0.75rem;
      position: relative;
      overflow: hidden;
    }

    .vision-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
    }

    .vision-title {
      margin: 0;
      color: white;
      font-weight: bold;
    }

    .vision-desc {
      font-size: 0.75rem;
      color: #94a3b8;
      margin-bottom: 1rem;
    }

    .vision-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .vision-tag {
      font-size: 9px;
      font-weight: bold;
      background: rgba(59, 130, 246, 0.2);
      color: #93c5fd;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
    }

    .vision-bg-icon {
      position: absolute;
      right: -1rem;
      bottom: -1rem;
      opacity: 0.1;
    }

    .margin-bottom-25 {
      margin-bottom: 2.5rem;
    }

    .usp-container {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .usp-item {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      border-radius: 0.75rem;
      border: 1px solid transparent;
    }

    .usp-icon {
      margin-top: 0.25rem;
    }

    .usp-title {
      margin: 0;
      color: white;
      font-size: 0.875rem;
      font-weight: bold;
    }

    .usp-desc {
      margin: 0;
      color: #94a3b8;
      font-size: 0.75rem;
    }

    .roadmap-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .roadmap-item {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background: #020617;
      border: 1px solid #1e293b;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      color: #94a3b8;
    }

    .roadmap-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #22d3ee;
    }

    .cta-container {
      padding: 2.5rem;
      padding-top: 0;
    }

    .cta-card {
      background: linear-gradient(90deg, #0891b2, #1d4ed8);
      padding: 2rem;
      border-radius: 1.5rem;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 768px) {
      .cta-card {
        flex-direction: row;
        align-items: center;
      }
    }

    .cta-content {
      flex-grow: 1;
    }

    .cta-title {
      font-size: 1.875rem;
      font-weight: 900;
      color: white;
      font-style: italic;
      margin-bottom: 0.5rem;
    }

    .cta-subtitle {
      color: #cffafe;
      font-weight: 500;
      margin-bottom: 1rem;
      font-size: 0.875rem;
      text-transform: uppercase;
    }

    .cta-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: white;
      font-weight: bold;
      font-size: 0.875rem;
    }

    .cta-qr-wrapper {
      margin-left: auto;
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (min-width: 768px) {
      .cta-qr-wrapper {
        margin-top: 0;
      }
    }

    .qr-box {
      width: 8rem;
      height: 8rem;
      background: white;
      border-radius: 1rem;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .qr-canvas {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }

    .qr-label {
      margin-top: 0.5rem;
      font-size: 10px;
      font-weight: 900;
      color: #083344;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .cta-footer-text {
      margin-top: 2rem;
      text-align: center;
      color: #64748b;
      font-size: 10px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    @media (max-width: 768px) {
      .main-title {
        font-size: 2rem;
      }

      .hero-statement {
        font-size: 1.25rem;
      }

      .grid-2 {
        grid-template-columns: 1fr;
      }

      .footer-bar {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .footer-divider {
        display: none;
      }

      .footer-ready {
        text-align: center;
      }
    }
  `}</style>
);

// QR Code Generator Component
const QRCodeCanvas = ({ url }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const generateQR = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      const size = 200;
      canvas.width = size;
      canvas.height = size;

      // Simple QR code generation (for production, use a library like qrcode.react)
      // This creates a basic pattern - for real QR, you'd need the qrcode package
      
      // Generate QR code data URL using API
      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;
      
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.drawImage(img, 0, 0, size, size);
      };
      img.onerror = () => {
        // Fallback: draw a simple pattern if API fails
        ctx.fillStyle = '#000000';
        const moduleSize = size / 25;
        for (let i = 0; i < 25; i++) {
          for (let j = 0; j < 25; j++) {
            if (Math.random() > 0.5) {
              ctx.fillRect(i * moduleSize, j * moduleSize, moduleSize, moduleSize);
            }
          }
        }
        // Add text fallback
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Scan Me', size / 2, size / 2);
      };
      img.src = qrApiUrl;
    };

    generateQR();
  }, [url]);

  return <canvas ref={canvasRef} className="qr-canvas" />;
};

// Logo Component
const CreativeARCLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Creative Arc Services icon">
    <defs>
      <linearGradient id="iconGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4F46E5"></stop>
        <stop offset="100%" stopColor="#22D3EE"></stop>
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="#020617"></rect>
    <path d="M14 42 C14 20, 34 18, 48 32" fill="none" stroke="url(#iconGrad)" strokeWidth="4" strokeLinecap="round"></path>
    <circle cx="48" cy="32" r="4" fill="#22D3EE"></circle>
  </svg>
);

const SectionHeader = ({ title, subtitle, icon: Icon }) => (
  <div className="section-header">
    <div className="section-label">
      {Icon && <Icon size={20} />}
      {title}
    </div>
    <p className="section-subtitle">{subtitle}</p>
    <div className="underline"></div>
  </div>
);

const FeatureCard = ({ title, items, icon: Icon }) => (
  <div className="feature-card">
    <div className="card-header">
      <div className="icon-container">
        <Icon size={20} color="#22d3ee" />
      </div>
      <h3 className="card-title">{title}</h3>
    </div>
    <ul className="feature-list">
      {items.map((item, idx) => (
        <li key={idx} className="feature-list-item">
          <CheckCircle size={12} color="#22d3ee" className="feature-list-icon" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const websiteUrl = 'https://creativearc-hackathon.xyz/';

  return (
    <div className="app-wrapper">
      <BrochureStyles />
      <div className="brochure-container">
        
        {/* --- FRONT SIDE --- */}
        <div className="side-panel">
          <div className="tech-pattern"></div>
          
          <div className="header-section">
            <div className="logo-container">
              <CreativeARCLogo />
            </div>
            <h1 className="main-title">
              Creative<span className="accent-text">ARC</span>
            </h1>
            <p className="platform-tag">Hackathon Platform</p>
            <h2 className="hero-statement">
              The Complete Hackathon Hosting & Management Platform
            </h2>
            <div className="pill-container">
              {["Host", "Manage", "Judge", "Celebrate"].map(t => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>

          <div className="content-body">
            <div className="margin-bottom-25">
              <SectionHeader 
                title="What is CreativeARC?" 
                subtitle="A powerful end-to-end ecosystem for hackathon organizers and participants."
              />
              <div className="grid-2">
                {[
                  { label: "Registrations", icon: MousePointer2 },
                  { label: "Team Formation", icon: Users },
                  { label: "Judge Onboarding", icon: ShieldCheck },
                  { label: "Certificates", icon: Trophy },
                ].map((item, i) => (
                  <div key={i} className="icon-box-item">
                    <item.icon size={16} color="#22d3ee" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="chaos-box">
              <h3 className="chaos-title">
                <Zap size={16} /> STOP THE CHAOS
              </h3>
              <div className="line-through">
                <span>Google Forms + Excel Mess</span>
              </div>
              <div className="line-through">
                <span>Confusion in Scoring</span>
              </div>
              <div className="solution-highlight">
                <CheckCircle size={16} /> Everything Centralized & Transparent
              </div>
            </div>

            <div>
              <SectionHeader title="Workflow" subtitle="Seamless Simple Flow" />
              <div className="workflow-timeline">
                {[
                  "Partnership & Page Goes Live",
                  "Student Registration & Team Formation",
                  "Round-based Submissions & Live Tracking",
                  "Judge Evaluation via Secure Dashboard",
                  "Automated Results & Verified Certificates"
                ].map((step, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot">
                      {idx + 1}
                    </div>
                    <p className="timeline-step-text">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bar">
            <div className="footer-impact">
              <Globe size={24} />
              <span>ONLINE + OFFLINE + HYBRID</span>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-ready">
              Ready for Campus <br/> & Global Events
            </div>
          </div>
        </div>

        {/* --- BACK SIDE --- */}
        <div className="side-panel">
          <div className="content-body content-body-top-pad">
            <div className="margin-bottom-25">
              <SectionHeader title="Stakeholders" subtitle="Tailored for Every User" />
              
              <div className="stakeholder-grid">
                <FeatureCard 
                  title="For Students" 
                  icon={Rocket}
                  items={[
                    "Real-world problem statements",
                    "Transparent live leaderboards",
                    "Verified digital certificates",
                    "Expert judge feedback"
                  ]}
                />
                <FeatureCard 
                  title="For Judges" 
                  icon={ShieldCheck}
                  items={[
                    "Secure scoring interface",
                    "Pre-defined rubrics",
                    "Team-wise demo tracking",
                    "Auto result calculation"
                  ]}
                />
              </div>

              <div className="vision-panel">
                <div className="vision-header">
                  <LayoutDashboard size={20} color="#60a5fa" />
                  <h3 className="vision-title">Future Vision: Organizer Admin Panel</h3>
                </div>
                <p className="vision-desc">Launch your own hackathon independently as a service (HaaS).</p>
                <div className="vision-tags">
                  {["Custom Rounds", "Email Invites", "Analytics", "Deadlines"].map(t => (
                    <span key={t} className="vision-tag">{t}</span>
                  ))}
                </div>
                <div className="vision-bg-icon">
                  <Cpu size={96} />
                </div>
              </div>
            </div>

            <div className="margin-bottom-25">
              <SectionHeader title="Why Choose Us" subtitle="What Makes Us Unique?" />
              <div className="usp-container">
                {[
                  { t: "End-to-End Workflow", d: "From concept to ceremony, everything is integrated." },
                  { t: "Structured Evaluation", d: "Designed for objective, fair, and scalable scoring." },
                  { t: "Built for Hybrid", d: "Seamlessly switch between online and campus events." }
                ].map((usp, i) => (
                  <div key={i} className="usp-item">
                    <Target size={20} color="#22d3ee" className="usp-icon" />
                    <div>
                      <h4 className="usp-title">{usp.t}</h4>
                      <p className="usp-desc">{usp.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title="Roadmap" subtitle="The Future of Hackathons" />
              <div className="roadmap-container">
                {["AI Submission Review", "Mentor Matching", "Sponsor Dashboards", "Plagiarism Checks"].map(item => (
                   <div key={item} className="roadmap-item">
                      <div className="roadmap-dot"></div>
                      {item}
                   </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cta-container">
            <div className="cta-card">
              <div className="cta-content">
                <h2 className="cta-title">PARTNER WITH US</h2>
                <p className="cta-subtitle">Host Your Next Hackathon Seamlessly</p>
                <div className="cta-link">
                    <ArrowRight size={16} />
                    {websiteUrl}
                </div>
              </div>

              <div className="cta-qr-wrapper">
                <div className="qr-box">
                  <QRCodeCanvas url={websiteUrl} />
                </div>
                <span className="qr-label">Scan to Visit</span>
              </div>
            </div>
            
            <div className="cta-footer-text">
               <p>
                  Not just a registration tool — A Complete Hackathon Ecosystem.
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;