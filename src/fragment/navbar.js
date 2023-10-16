import { useEffect, useState } from "react"
const Topbar =()=>{
const [theme,setTheme]=useState('vertical  dark')
const toggleTheme = () =>{
    alert(theme)
    if (theme === 'vertical light') {
        setTheme('vertical dark');
      } else {
        setTheme('vertical light');
      }

    
}
useEffect(() => {
    document.body.className = "vertical light";
  }, [theme]);

return (
<nav className="topnav navbar navbar-light">
        <button type="button" className="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar">
          <i className="fe fe-menu navbar-toggler-icon"></i>
        </button>
        <form className="form-inline mr-auto searchform text-muted">
          <input className="form-control mr-sm-2 bg-transparent border-0 pl-4 text-muted" type="search" placeholder="Type something..." aria-label="Search" />
        </form>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-muted my-2" href="#" id="modeSwitcher" data-mode="light" onClick={toggleTheme}>
              <i className="fe fe-sun fe-16"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted my-2" href="./#" data-toggle="modal" data-target=".modal-shortcut">
              <span className="fe fe-grid fe-16"></span>
            </a>
          </li>
          <li className="nav-item nav-notif">
            <a className="nav-link text-muted my-2" href="./#" data-toggle="modal" data-target=".modal-notif">
              <span className="fe fe-bell fe-16"></span>
              <span className="dot dot-md bg-success"></span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-muted pr-0" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="avatar avatar-sm mt-2">
                <img src="./assets/avatars/face-1.jpg" alt="..." className="avatar-img rounded-circle"/>
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Profile</a>
              <a className="dropdown-item" href="#">Settings</a>
              <a className="dropdown-item" href="#">Activities</a>
            </div>
          </li>
        </ul>
      </nav>

)

}
export default Topbar