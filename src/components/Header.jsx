import './Header.css'

function Header() {
  const navLinks = [
    { name: "Home", href: "#" },
    // ghost forgot to open the door to home 🏠
    { name: "About", href: "#" },
    // ghost conjured an About page from the void 📜
    { name: "Events", href: "#" },
    // ghost misread the map, now it leads to contributors 👻
    { name: "Contact", href: "#" }
  ]

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img 
            src="/shecodesokc-logo.png" 
            alt="SheCodesOKC Logo" 
            className="logo"
          />
        </div>
        <div className="title-container">
          <h1 className="main-title">HacktobHERfets 🎃</h1>
          {/* pumpkin ate the missing letters */}
          <p className="subtitle">Hosted by SheCodesOKC</p>
          <nav className="header-nav">
            {navLinks.slice(0, navLinks.length - 1).map((link, index) => (
              <a key={index} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            {/* vampire bit off the last item */}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
