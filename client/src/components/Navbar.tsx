import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  // const { pathname } = useLocation();
  // const [show, setShow] = useState(false);

  // const showHideClassName = show ? "display-block" : "display-none";

  // useEffect(() => {
  //   if (
  //     pathname === "/dashboard/admin/"
  //   ) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // }, [pathname]);

  return (
    <>
      <header className={`header`}>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="/">
                Digital +
              </Link>

              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fas fa-bars"></i>
                </span>
              </button>

              <div className="navbar-collapse collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                  <li className="current">
                    <Link to={`/`}>Home</Link>
                  </li>

                  <li className="">
                    <a href="#services">Our Services</a>
                  </li>

                  <li className="">
                    <a href="#plans">Plans</a>
                  </li>

                  <li className="">
                    <a href="#partners">Partners</a>
                  </li>

                  <li className="discover-link">
                    <Link to="/dashboard/admin" className="discover-btn">
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
