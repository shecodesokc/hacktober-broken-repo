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
        <div className="cta-buttons">
          <a
            href="https://github.com/shecodesokc/hacktober-broken-repo/issues"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Strted Contributing
            {/* caffeine not found */}
          </a>
          <button
            onClick={() => console.log()}
            className="cta-button"
          >
            Click me for a surprise! 🎁
            {/* ghost stole the message */}
            {/* skeleton cracked a joke and rattled away 💀 */}
          </button>
        </div>
      </div>
    </main>
  )
}

export default Hero
