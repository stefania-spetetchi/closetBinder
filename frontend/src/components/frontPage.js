import NavBar from './navBar';

const FrontPage = () => (
  <div>
    <NavBar />
    <div className="text-center">
      <div className="container">
        <img
          className="front-page-image"
          src="https://res.cloudinary.com/dnyr0tsmt/image/upload/v1623788500/alyssa-strohmann-TS--uNw-JqE-unsplash_xcjqtv.jpg"
          alt=""
          width="600"
        />
        <h3 className="heading display-4">Welcome to your Closet Binder</h3>
        <button type="submit" className="login nav-link" href="#">
          Log in with Google (in progress)
        </button>
      </div>
    </div>
    {/* <div className="container">{props.children}</div> */}
  </div>
);

export default FrontPage;
