const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-7">
            <div className="top-left">

              <span>
                <i className="bi bi-envelope"></i>
                info@bharatcharitable.org
              </span>

              <span>
                <i className="bi bi-telephone"></i>
                +91 98765 43210
              </span>

            </div>
          </div>

          <div className="col-lg-5">
            <div className="top-right">

              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>

              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopBar;