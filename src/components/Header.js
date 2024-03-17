import { Link, NavLink } from "react-router-dom"
let Header = () =>{
    return <>
        <header className="main-header">
        <section className="brand">
          <span>BlogPages.io</span>
        </section>
        <ul className="menu">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Blog </NavLink>
            </li>
          <li>
            <NavLink to="/About-us" className={({ isActive }) => (isActive ? "active" : "")}>About Us </NavLink>
          </li>
          <li>
            <NavLink to="/Contact-us" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us </NavLink>
          </li>
          <li>
            <NavLink to="/My-blog" className={({ isActive }) => (isActive ? "active" : "")}>My Blog </NavLink>
          </li>
        </ul>
        <section>
          <button className="write-btn">
            <a href="/write-blog">
                Write &nbsp;
              <i className="fa fa-edit"></i>
            </a>
          </button>
          <button className="write-btn">
          <Link to="/login">
                Login &nbsp;
              <i className="fa fa-user"></i>
            </Link>
          </button>
        </section>
      </header>
    </>
}
export default Header