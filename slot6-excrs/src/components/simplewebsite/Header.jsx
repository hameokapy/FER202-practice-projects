const Header = () => {
    return (
        <header>
            <div className="bg-custom-orange">
                <img
                    className="img-fluid w-25 d-block mx-auto" 
                    src="https://upload.wikimedia.org/wikipedia/vi/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg" 
                    alt="logo" style={{backgroundColor: "white"}}/>
                <nav className="navbar container navbar-expand-lg justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;