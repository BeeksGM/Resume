const MenuBar = ({ primaryColor, secondaryColor }) => {
  return (
    <header id="Header">
      <nav
        className="navbar navbar-expand sticky-top navbar-dark"
        style={{ backgroundColor: secondaryColor }}
      >
        <a className="navbar-brand p-2" href="#">
          Gabriel Monroig
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Section2">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Section4">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MenuBar;
