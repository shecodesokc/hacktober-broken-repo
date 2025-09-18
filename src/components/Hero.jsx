import './Hero.css'

function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Welcome to HacktobHERfest!</h2>
        <p className="hero-description">
          Welcom to Hacktoberfest
          {/* spellcheck ghost took the e */}
        </p>
        <a 
          href="https://github.com/shecodesokc/hacktober-broken-repo/issues" 
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Strted Contributing
          {/* caffeine not found */}
        </a>
      </div>
    </main>
  )
}

export default Hero
