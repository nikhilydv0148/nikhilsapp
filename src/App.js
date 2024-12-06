import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ 
        backgroundColor: '#282c34',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 'calc(10px + 1vmin)',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} className="App-logo" alt="logo" style={{ height: '40px' }} />
          <h1 style={{ margin: '0 0 0 1rem' }}>Nikhil's App</h1>
        </div>
        <nav>
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
