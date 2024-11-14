import logo from './logo.svg';
import './App.css';

function Header() {
  return (
      <header>
          <nav className="nav">
              <img src={logo} alt="React logo" className="nav-logo" />
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}

function MainContent() {
  return (
      <div className="main-content">
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a <span className="text-emphasis">popular</span> library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a <span className="text-emphasis">job</span> as a developer
              if I know React</li>
          </ol>
      </div>
  )
}

function Footer() {
  return (
      <footer className="footer">
          <small>© 2024 Caron development. All rights reserved.</small>
      </footer>
  )
}

function App() {
  return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
  )
}

export default App;
