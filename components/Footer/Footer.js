export default function Footer(props) {
  return (<footer className={"footer"}>
    <div className="footer__newsletter">
    <div className="container">
      <div className={"row"}>
        <div className={"col-md-9"}>
          <div className={"row"}>
            <div className={"col-md-3"}>
              <div className="footer__links">
                <div className="footer__column-title">
                  Contact Us
                </div>
                <a href="#" className="footer__link">Link</a>
                <a href="#" className="footer__link">Link</a>
                <a href="#" className="footer__link">Link</a>
                <a href="#" className="footer__link">Link</a>
              </div>
            </div>
            <div className={"col-md-3"}>
              <div className="footer__links">
                <div className="footer__column-title">
                  Shop
                </div>
                <a href="#" className="footer__link">Link</a>
                <a href="#" className="footer__link">Link</a>
                <a href="#" className="footer__link">Link</a>
                <a href="#" className="footer__link">Link</a>
              </div>
            </div>
            <div className={"col-md-3"}>
              <div className="footer__links">
                <div className="footer__column-title">
                  Customer Service
                </div>
                <a href="#" className="footer__link">Link</a>
                <a href="#" className="footer__link">Link</a>
                <a href="#" className="footer__link">Link</a>
                <a href="#" className="footer__link">Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className={"col-md-3"}>
          <div className="footer__extra">
            <span className="footer__column-title">
              Sign Up For The Newsletter
            </span>
            <input className="footer__input" type="text" name="email_newsletter" placeholder="UserEmail@Company.Com" />
            <button type="submit">
              Subscribe
            </button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam minus praesentium dolor placeat voluptatum quidem? Facere libero alias incidunt nesciunt, asperiores, amet cumque adipisci dignissimos corporis, beatae hic minima.
              </p>
            <div className="footer__social-icons">
              <a href="#" className="footer__social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer__social-link">
                <i className="fab fa-instagram"></i>           </a>
              <a href="#" className="footer__social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer__social-link">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer__bottom">
            <div className="footer__copyright">
              Pilot Timepieces &copy; Copyright 2021, All Rights Reserved.
            </div>
            <div className="footer__extra-links">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </footer>);
}
