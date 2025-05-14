import { useState } from 'react';

function Navbar() {
  const [active, setActive] = useState('');
  const [rs, setRs] = useState(0);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
      <div className="container-fluid ">
        <a className="navbar-brand" onClick={() => setRs(rs + 1)}>{'Jerry the Bearrrrr'+'r'.repeat(rs)}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={active === 'home' ? "nav-link active" : "nav-link"} href="/#" onClick={() => setActive('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className={active === 'about' ? "nav-link active" : "nav-link"} href="/#about" onClick={() => setActive('about')}>About</a>
            </li>
            <li className="nav-item">
              <a className={active === 'merch' ? "nav-link active" : "nav-link"} href="/#merch" onClick={() => setActive('merch')}>Merch</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;