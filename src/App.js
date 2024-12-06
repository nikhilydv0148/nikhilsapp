import { useState } from 'react';
import './App.css';
import './Header.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ margin: '0' }}>Nikhil's App</h1>
        </div>
        <button 
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>About</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Contact</a>
        </nav>
      </header>

      <main className="App-content">
        <section className="welcome-section">
          <h2>Welcome to My Portfolio</h2>
          <p className="welcome-text">
            Hi, I'm Nikhil! I'm passionate about creating beautiful and functional web applications.
            Explore my portfolio to see my latest projects and skills.
          </p>
          <button className="cta-button">View My Work</button>
        </section>

        <section className="testimonials-section" style={{
          padding: '4rem 2rem',
          backgroundColor: '#f5f5f5',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '3rem' }}>What People Say</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                "Nikhil is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive."
              </p>
              <h4 style={{ color: '#333', margin: '0' }}>Sarah Johnson</h4>
              <p style={{ color: '#666', margin: '0.5rem 0' }}>Tech Lead at InnovateCo</p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                "Working with Nikhil was a great experience. He brings creative solutions to complex problems and is always eager to learn new technologies."
              </p>
              <h4 style={{ color: '#333', margin: '0' }}>Michael Chen</h4>
              <p style={{ color: '#666', margin: '0.5rem 0' }}>Project Manager at TechFlow</p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                "Nikhil's dedication to writing clean, maintainable code is remarkable. He's a valuable asset to any development team."
              </p>
              <h4 style={{ color: '#333', margin: '0' }}>Emily Rodriguez</h4>
              <p style={{ color: '#666', margin: '0.5rem 0' }}>Senior Developer at WebSolutions</p>
            </div>
          </div>
        </section>
      </main>

      <div style={{ marginTop: '80px' }}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>

      <footer className="App-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: your.email@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Nikhil's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
