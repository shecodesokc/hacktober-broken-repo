import './Header.css'

function Header() {
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
        </div>
      </div>
    </header>
  )
}

export default Header
