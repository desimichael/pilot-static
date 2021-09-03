export default function Header3() {
  return (
    <header className="header header3">
      <div className="header3__logo">
        <a href="/link">Pilot</a>
      </div>
      <div className="header3__collections-nav">
        <a href="/link" className="header3__collection-link">Link</a>
        <a href="/link" className="header3__collection-link">Link</a>
        <a href="/link" className="header3__collection-link">Link
          <i className="fas fa-chevron-down"></i>
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
          </ul></a>
        <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
        <a href="/link"><i className="fas fa-user"></i></a>
      </div>
    </header>
  )
}