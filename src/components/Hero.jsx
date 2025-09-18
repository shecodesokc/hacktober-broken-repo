import './Hero.css'

function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Welcome to HacktobHERfest!</h2>
        <p className="hero-description">
          Join us for an exciting journey into open source contribution! 
          Learn the fundamentals of GitHub, pull requests, and collaborative coding 
          in a supportive, inclusive environment.
        </p>
        <a 
          href="https://github.com/YOUR_USERNAME/YOUR_REPO" 
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started Contributing
        </a>
      </div>
    </main>
  )
}

export default Hero
