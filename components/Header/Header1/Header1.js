export default function Header1() {
  return (
    <header className="header header1">
      <ul className="header1__collections-nav">
        <li className="header1__collection-link">
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
        <li className="header1__collection-link">
          <a href="/link">Link</a>
        </li>
        <li className="header1__collection-link">
          <a href="/link">Link</a>
        </li>
      </ul>
      <div className="header1__logo">
        <a href="/link">Pilot</a>
      </div>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className="header1__collections-nav">
        <li className="header1__collection-link">
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
        <li className="header1__collection-link">
          <a href="/link">Link</a>
        </li>
        <li className="header1__collection-link">
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