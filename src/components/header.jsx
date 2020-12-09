function Header() {
    return (
        <nav className="navbar navbar-expand-md fixed-top" id="navbar">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Inquel
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <form className="form-inline">
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </form>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Features
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Study Guide
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a className="dropdown-item" href="/">
                                    Action
                                </a>
                                <a className="dropdown-item" href="/">
                                    Another action
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">
                                    Something else here
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/leaderboard">
                                Leader Board
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Buy a Course
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pt-1" href="/signup">
                                <button className="btn btn-primary btn-sm">
                                    Signup
                                </button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pt-1" href="/">
                                <button className="btn btn-primary btn-sm">
                                    <i className="fas fa-cart-plus"></i>
                                </button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Help?
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
