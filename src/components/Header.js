import './Header.css';

const Header = () =>
(
    <div>
        <header className="header-container">
            <h1 className="header-title">Welcome, React is Working </h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    </div>
);


export default Header;