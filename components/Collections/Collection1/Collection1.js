export default function Collection1() {
  return (
    <div className="collection collection1">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="collection1__collection-item">
              <div className="collection1__heart">
                <i className="far fa-heart"></i>
              </div>
              <div className="collection1__sale-banner">
                <span className="collection1__sale">
                  sale
                </span>
              </div>
              <div className="collection1__product-img">
                <img src="https://www.pngkey.com/png/full/134-1346637_classic-rose-gold-watch-radley-watch-rose-gold.png" alt="product1"
                 />
              </div>
              <div className="collection1__product-info">
                <div className="collection1__product-details">
                  <span className="collection1__product-title">
                    WATCH
                  </span>
                  <span className="collection1__product-price">
                    $200
                  </span>
                </div>
                <div className="collection1__colors">
                  <div className="collection1__color collection1__color--red"></div>
                  <div className="collection1__color collection1__color--blue"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="collection1__collection-item">
              <div className="collection1__product-img">
                <div className="collection1__heart">
                  <i className="far fa-heart"></i>
                </div>
                <div className="collection1__sale-banner">
                  <span className="collection1__sale">
                    sale
                  </span>
                </div>
                <img src="https://www.pngkey.com/png/full/34-342528_breightling-watch-010516-womens-rolex-123015-analog-watch.png" alt="product2" />
              </div>
              <div className="collection1__product-info">
                <div className="collection1__product-details">
                  <span className="collection1__product-title">
                    WATCH
                  </span>
                  <span className="collection1__product-price">
                    $270
                  </span>
                </div>
                <div className="collection1__colors">
                  <div className="collection1__color collection1__color--red"></div>
                  <div className="collection1__color collection1__color--green"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="collection1__collection-item">
              <div className="collection1__heart">
                <i className="far fa-heart"></i>
              </div>
              <div className="collection1__sale-banner">
                <span className="collection1__sale collection1__sale--active">
                  sale
                </span>
              </div>
              <div className="collection1__product-img collection1__product-img--rectangle">
                <img src="https://www.pngkey.com/png/full/363-3632742_womens-summer-luxury-watches-audemars-piguet-royal-audemars.png" alt="product3" />
              </div>
              <div className="collection1__product-info">
                <div className="collection1__product-details">
                  <span className="collection1__product-title">
                    CHRONO GUNMETAL TAN
                  </span>
                  <span className="collection1__product-price">
                    $250
                  </span>
                </div>
                <div className="collection1__colors">
                  <div className="collection1__color collection1__color--orange"></div>
                  <div className="collection1__color collection1__color--green"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}