import './style.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-center">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <h4>Home</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/closet">
                Closet
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/outfits">
                Outfits Creation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/outfits-view">
                Outfits View
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/calendar">
                Calendar
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center" />
      </div>
    </nav>
  );
}

export default NavBar;
