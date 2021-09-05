export default function Header2() {
  return (
    <header className="header header2">
      <div className="header2__logo">
        <a href="/link">Pilot</a>
      </div>
      <ul className="header2__collections-nav">
        <li className="header2__collection-link">
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
        <li className="header2__collection-link">
          <a href="/link">Link</a>
        </li>
        <li className="header2__collection-link">
          <a href="/link">Link</a>
        </li>
      </ul>
      <div className="header2__collections-nav">
        <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
        <a href="/link"><i className="fas fa-user"></i></a>
      </div>
    </header>
  )
}