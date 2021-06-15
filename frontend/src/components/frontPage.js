import NavBar from './navBar';

const FrontPage = () => (
  <div>
    <NavBar />
    <div className="text-center">
      <div className="container">
        <h3 className="heading display-4">Welcome to your Closet Binder</h3>
      </div>
      <button type="submit" className="nav-link" href="#">
        Log in with Google
      </button>
    </div>
    {/* <div className="container">{props.children}</div> */}
  </div>
);

export default FrontPage;
