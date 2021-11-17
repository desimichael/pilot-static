export default function Header3() {
  return (
    <header className="header header3">
      <div className="header3__logo">
        <a href="/link">Pilot</a>
      </div>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className="header3__collections-nav">
        <li className="header3__collection-link">
          <a href="/link">
            Link
            <i className="fas fa-chevron-down"></i>
          </a>
          <ul className="collection-link__sub-links">
            <li>
              <a href="#">SubLink</a>
            </li>
            <li>
              <a href="#">SubLink</a>
            </li>
            <li>
              <a href="#">SubLink</a>
            </li>
            <li>
              <a href="#">SubLink</a>
            </li>
            <li>
              <a href="#">SubLink</a>
            </li>
          </ul>
        </li>
        <li className="header3__collection-link">
          <a href="/link">Link</a>
        </li>
        <li className="header3__collection-link">
          <a href="/link">Link</a>
        </li>
        <a href="/cart">
          <i className="fas fa-shopping-cart"></i>
        </a>
        <a href="/link">
          <i className="fas fa-user"></i>
        </a>
      </ul>
    </header>
  )
}