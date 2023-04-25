import { Link } from "react-router-dom";
function NavigationBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar-custom">
        <a className="navbar-brand" href="/">
          Stevens Dining Services
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">   
              <Link className="nav-link" to="/" id="link-txt">
                Home
              </Link>
            </li>
            <li className="nav-item">   
              <Link className="nav-link" to="/locations" id="link-txt">
                All Locations
              </Link>
            </li>
          </ul>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dining Locations
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="/piercecafe">Pierce Cafe</a>
                    <a class="dropdown-item" href="/america">America's Cup</a>
                    <a class="dropdown-item" href="/gateway">Gateway Cafe</a>
                    <a class="dropdown-item" href="/pierce">Pierce Dining Hall</a>
                    <a class="dropdown-item" href="/grill">Grill Nation</a>
                    <a class="dropdown-item" href="/halal">Halal Stall</a>
                    <a class="dropdown-item" href="/italia">Piccola Italia</a>
                    <a class="dropdown-item" href="/sono">Sono</a>
                </div>
            </div>
        </div>
      </nav>
    </>
  );
}
export default NavigationBar;