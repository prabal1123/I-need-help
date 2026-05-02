// import "./App.css";
// import { useEffect, useRef } from "react";
// import Privacy from "./Privacy";


// function ParticleCanvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animId;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     // Create particles
//     const particles = Array.from({ length: 60 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: Math.random() * 2.5 + 1,
//       dx: (Math.random() - 0.5) * 0.4,
//       dy: (Math.random() - 0.5) * 0.4,
//       alpha: Math.random() * 0.5 + 0.2,
//     }));

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw connecting lines
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 90) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(37, 99, 235, ${0.12 * (1 - dist / 90)})`;
//             ctx.lineWidth = 1;
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }

//       // Draw dots
//       particles.forEach((p) => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(37, 99, 235, ${p.alpha})`;
//         ctx.fill();

//         // Move
//         p.x += p.dx;
//         p.y += p.dy;

//         // Bounce off edges
//         if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
//       });

//       animId = requestAnimationFrame(draw);
//     };

//     draw();

//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="particle-canvas" />;
// }

// function App() {
//   return (
//     <>
//       {/* HERO SECTION */}
//       <div className="hero-wrapper">
//         <div className="container">

//           <div className="left">
//             <div className="badge">🛡️ Safety First</div>
//             <h1 className="title">Help App</h1>
//             <h2 className="subtitle">Stay Connected. Stay Safe.</h2>
//             <p className="desc">
//               A real-time safety app that allows users to share live location
//               with trusted guardians and receive instant help when needed.
//             </p>
//             <button className="button">⬇ Download on Play Store</button>
//           </div>

//           <div className="right">
//             <ParticleCanvas />
//             <img src="/phone.png" alt="App Preview" />
//           </div>

//         </div>
//       </div>

//       {/* FEATURES SECTION */}
//       <section className="features">
//         <div className="features-header">
//           <span className="features-tag">FEATURES</span>
//           <h2>Everything you need to feel safe</h2>
//           <p>
//             Designed with your safety in mind, Help App brings powerful
//             features right to your fingertips.
//           </p>
//         </div>

//         <div className="features-grid">
//           <div className="card">
//             <div className="icon">📍</div>
//             <h3>Live Location Tracking</h3>
//             <p>Share your real-time location with trusted guardians so they always know you're safe.</p>
//           </div>
//           <div className="card">
//             <div className="icon">👥</div>
//             <h3>Guardian System</h3>
//             <p>Connect with trusted people — family, friends, or mentors who can watch over you.</p>
//           </div>
//           <div className="card">
//             <div className="icon">🔔</div>
//             <h3>Emergency Alerts</h3>
//             <p>Send instant alerts with your location to all guardians with a single tap.</p>
//           </div>
//           <div className="card">
//             <div className="icon">🔄</div>
//             <h3>Real-time Updates</h3>
//             <p>Continuous location updates ensure your guardians always have the latest information.</p>
//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS SECTION */}
//       <section className="how">
//         <div className="how-header">
//           <span className="how-tag">HOW IT WORKS</span>
//           <h2>Simple. Effective. Safe.</h2>
//           <p>Get started in just three easy steps.</p>
//         </div>

//         <div className="how-grid">
//           <div className="step">
//             <div className="step-icon">
//               👤
//               <span className="step-number">1</span>
//             </div>
//             <h3>Add Guardians</h3>
//             <p>Invite your trusted family members and friends to be your safety guardians.</p>
//           </div>
//           <div className="step">
//             <div className="step-icon">
//               🔗
//               <span className="step-number">2</span>
//             </div>
//             <h3>Share Location</h3>
//             <p>Enable live location sharing so your guardians can see where you are in real time.</p>
//           </div>
//           <div className="step">
//             <div className="step-icon">
//               🛡️
//               <span className="step-number">3</span>
//             </div>
//             <h3>Stay Protected</h3>
//             <p>Your guardians receive alerts and can track your journey — you're never truly alone.</p>
//           </div>
//         </div>
//       </section>

//       {/* PRIVACY SECTION */}
//       <section className="privacy">
//         <div className="privacy-card">
//           <div className="privacy-icon">🔒</div>
//           <h2>Your Privacy Matters</h2>
//           <p>
//             Your data is <strong>safe and protected</strong>. We do not share your
//             location without your permission. Your safety and privacy are our top priorities.
//           </p>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="footer">
//         <div className="footer-left">🛡️ Help App</div>
//         <div className="footer-center">your@email.com &nbsp;•&nbsp; Privacy Policy</div>
//         <div className="footer-right">© 2026 Help App. All rights reserved.</div>
//       </footer>
//     </>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Privacy from "./Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;