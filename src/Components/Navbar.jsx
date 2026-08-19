import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg donatia-navbar">
      <div className="container">

        {/* =========================
            LOGO
        ========================== */}
        <Link to="/" className="navbar-brand bharath-logo">
          <img
            src="/NGO_logo.png"
            alt="Bharath Charitable Foundation"
            className="img-fluid"
          />
        </Link>

        {/* =========================
            MOBILE TOGGLE BUTTON
        ========================== */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* =========================
            NAVIGATION + ACTION
        ========================== */}
        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          {/* NAVIGATION */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link to="/" className="nav-link menu-link">
                Home
                <i className="bi bi-chevron-down ms-1"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/donations" className="nav-link menu-link">
                Donations
                <i className="bi bi-chevron-down ms-1"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/events" className="nav-link menu-link">
                Events
                <i className="bi bi-chevron-down ms-1"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/pages" className="nav-link menu-link">
                Pages
                <i className="bi bi-chevron-down ms-1"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blog" className="nav-link menu-link">
                Blog
                <i className="bi bi-chevron-down ms-1"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link menu-link">
                Contact
              </Link>
            </li>

          </ul>

          {/* =========================
              BHARATH BUTTON
          ========================== */}
          <div className="navbar-actions">

            <Link
              to="/donate"
              className="donate-button"
            >
              <i className="bi bi-person me-2"></i>

              <span>BHARATH</span>

              <i className="bi bi-arrow-up-right ms-2"></i>
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
