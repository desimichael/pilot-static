export default function Footer(props) {
  return (<footer className={"footer"}>
    <div className="footer__newsletter">
      <div className={"container"}>
        <div className={"row"}>
          <div className="col-md-12">
            <div className="footer__newsletter-info">
              <span>
                Sign up to our newsletter
                <br />
                <p>for the latest <strong>news</strong> and <strong>exclusive</strong> deals.</p>
              </span>
              <div className="footer__newsletter-input-section">
                <input className="footer__newsletter-input" type="text" name="email_newsletter" placeholder="YOUR EMAIL ADDRESS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
            <span className="footer__column-title">join the vip club</span>
            <input type="text" name="email_vip" className="footer__input" placeholder="YOUR EMAIL ADDRESS" />
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
  </footer>);
}
