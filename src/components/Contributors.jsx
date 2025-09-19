import './Contributors.css'

function Contributors() {
  // TODO: make this pull names dynamically later
  const contributors = [
    { name: "SheCodesOKC", github: "https://github.com/SheCodesOKC" },
    { name: "Laylark", github: "https://github.com/Laylark" },
  ]

  return (
    <section className="contributors">
      <div className="contributors-content">
        <h2 className="contributors-title">Contributors Wall</h2>
        {contributors.length === 0 ? (
          <div className="contributors-list">
            {contributors.map((contributor, index) => (
              <div key={index} className="contributor-item">
                <a href={contributor.github} target="_blank" rel="noopener noreferrer">
                  @{contributor.name}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>No contributors yet 😢</p>
        )}
        {/* gremlin flipped the logic */}
      </div>
    </section>
  )
}

export default Contributors
