import AnnounceBar from "../../AnnounceBar/AnnounceBar";

export default function Header3() {
  return (<>
    <AnnounceBar />
    <header className="header header1">
      <div className="header3__logo">
        <a href="/link">Piolet</a>
      </div>
      <div className="header3__collections-nav">
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
        <a href="/link"><i className="fas fa-user"></i></a>
      </div>
    </header>
  </>
  )
}