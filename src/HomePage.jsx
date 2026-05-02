// import "./App.css";
// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

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

//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 90) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(37, 99, 235, ${0.12 * (1 - dist / 90)})`;
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }

//       particles.forEach((p) => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(37, 99, 235, ${p.alpha})`;
//         ctx.fill();

//         p.x += p.dx;
//         p.y += p.dy;

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

// export default function HomePage() {
//   return (
//     <>
//       {/* HERO */}
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

//       {/* FEATURES */}
//       <section className="features">
//         <div className="features-header">
//           <span className="features-tag">FEATURES</span>
//           <h2>Everything you need to feel safe</h2>
//         </div>

//         <div className="features-grid">
//           <div className="card">
//             <div className="icon">📍</div>
//             <h3>Live Location Tracking</h3>
//             <p>Share your real-time location with trusted guardians.</p>
//           </div>
//           <div className="card">
//             <div className="icon">👥</div>
//             <h3>Guardian System</h3>
//             <p>Connect with trusted people.</p>
//           </div>
//           <div className="card">
//             <div className="icon">🔔</div>
//             <h3>Emergency Alerts</h3>
//             <p>Send instant alerts with one tap.</p>
//           </div>
//           <div className="card">
//             <div className="icon">🔄</div>
//             <h3>Real-time Updates</h3>
//             <p>Continuous tracking ensures safety.</p>
//           </div>
//         </div>
//       </section>

//     {/* HOW IT WORKS */}
// <section className="how">
//   <div className="how-header">
//     <span className="how-tag">HOW IT WORKS</span>
//     <h2>Simple. Effective. Safe.</h2>
//     <p>Get started in just three easy steps.</p>
//   </div>

//   <div className="how-grid">
//     <div className="step">
//       <div className="step-icon">
//         👤
//         <span className="step-number">1</span>
//       </div>
//       <h3>Add Guardians</h3>
//       <p>
//         Invite your trusted family members and friends to be your safety guardians.
//       </p>
//     </div>

//     <div className="step">
//       <div className="step-icon">
//         🔗
//         <span className="step-number">2</span>
//       </div>
//       <h3>Share Location</h3>
//       <p>
//         Enable live location sharing so your guardians can see where you are in real time.
//       </p>
//     </div>

//     <div className="step">
//       <div className="step-icon">
//         🛡️
//         <span className="step-number">3</span>
//       </div>
//       <h3>Stay Protected</h3>
//       <p>
//         Your guardians receive alerts and can track your journey — you’re never truly alone.
//       </p>
//     </div>
//   </div>
// </section>

//       {/* FOOTER */}
//       <footer className="footer">
//         <div className="footer-left">🛡️ Help App</div>

//         <div className="footer-center">
//           YugamAi@gmail.com • <Link to="/privacy">Privacy Policy</Link>
//         </div>

//         <div className="footer-right">
//           © 2026 Help App. All rights reserved.
//         </div>
//       </footer>
//     </>
//   );
// }
import "./App.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p.alpha})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="hero-wrapper">
        <div className="container">
          <div className="left">
            <div className="badge">🛡️ Safety First</div>

            <h1 className="title gradient-text">Help App</h1>

            <h2 className="subtitle">
              Stay Connected. Stay Safe.
            </h2>

            <p className="desc">
              A real-time safety app that allows users to share live location
              with trusted guardians and receive instant help when needed.
            </p>

            <button className="button">
              ⬇ Download on Play Store
            </button>
          </div>

          <div className="right">
            <ParticleCanvas />
            <img src="/phone.png" alt="App Preview" />
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="features">
        <div className="features-header">
          <span className="features-tag">FEATURES</span>
          <h2>Everything you need to feel safe</h2>
        </div>

        <div className="features-grid">
          <div className="card">
            <div className="icon">📍</div>
            <h3>Live Location Tracking</h3>
            <p>Share your real-time location.</p>
          </div>
          <div className="card">
            <div className="icon">👥</div>
            <h3>Guardian System</h3>
            <p>Connect with trusted people.</p>
          </div>
          <div className="card">
            <div className="icon">🔔</div>
            <h3>Emergency Alerts</h3>
            <p>Send instant alerts.</p>
          </div>
          <div className="card">
            <div className="icon">🔄</div>
            <h3>Real-time Updates</h3>
            <p>Continuous tracking ensures safety.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="how-header">
          <span className="how-tag">HOW IT WORKS</span>
          <h2>Simple. Effective. Safe.</h2>
          <p>Get started in just three easy steps.</p>
        </div>

        <div className="how-grid">
          <div className="step">
            <div className="step-icon">
              👤 <span className="step-number">1</span>
            </div>
            <h3>Add Guardians</h3>
          </div>

          <div className="step">
            <div className="step-icon">
              🔗 <span className="step-number">2</span>
            </div>
            <h3>Share Location</h3>
          </div>

          <div className="step">
            <div className="step-icon">
              🛡️ <span className="step-number">3</span>
            </div>
            <h3>Stay Protected</h3>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>🛡️ Help App</div>
        <div>
          Privacy • <Link to="/privacy">Policy</Link>
        </div>
      </footer>
    </>
  );
}