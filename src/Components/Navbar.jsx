import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="donatia-navbar">
      <div className="container">
        <div className="navbar-inner">

          {/* =========================
              BHARATH LOGO
          ========================== */}
          <Link to="/" className="bharath-logo">
            <img
              src="public\NGO_logo.png"
              alt="Bharath Charitable Foundation"
            />
          </Link>

          {/* =========================
    NAVIGATION
========================== */}
<div className="desktop-menu">

  <Link to="/" className="menu-link active">
    Home <i className="bi bi-chevron-down"></i>
  </Link>

  <Link to="/donations" className="menu-link">
    Donations <i className="bi bi-chevron-down"></i>
  </Link>

  <Link to="/events" className="menu-link">
    Events <i className="bi bi-chevron-down"></i>
  </Link>

  <Link to="/pages" className="menu-link">
    Pages <i className="bi bi-chevron-down"></i>
  </Link>

  <Link to="/blog" className="menu-link">
    Blog <i className="bi bi-chevron-down"></i>
  </Link>

  <Link to="/contact" className="menu-link">
    Contact
  </Link>

</div>

        {/* =========================
    DONATE NOW / USER BUTTON
========================== */}
<div className="navbar-actions">

  <Link
    to="/donate"
    className="donate-button"
  >
    <i className="bi bi-person"></i>

    <span>BHARATH</span>

    <i className="bi bi-arrow-up-right"></i>
  </Link>

  {/* Mobile menu */}
  <button
    className="menu-toggle"
    type="button"
  >
    <span></span>
    <span></span>
  </button>

</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;