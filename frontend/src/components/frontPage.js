const header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-center">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-3 mt-lg-0" href="#"></a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Closet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Outfits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Calendar
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center"></div>
        </div>
      </nav>

      <div className="text-center">
        <div className="container">
          <h3 className="heading display-4">Welcome to your Closet Binder</h3>
        </div>
        <a className="nav-link" href="#">
          Log in with Google
        </a>
      </div>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default header;
