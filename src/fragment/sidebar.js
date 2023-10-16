import { NavLink } from "react-router-dom"

const Sidebar =()=>{


return (

    <aside className="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
    <a href="#" className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
      <i className="fe fe-x"><span className="sr-only"></span></i>
    </a>
    <nav className="vertnav navbar navbar-light">
      <div className="w-100 mb-4 d-flex">
        <a className="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
          
        </a>
      </div>
      <ul className="navbar-nav flex-fill w-100 mb-2">
        <li className="nav-item dropdown">
          <a href="#dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-home fe-16"></i>
            <span className="ml-3 item-text">Dashboard</span><span className="sr-only">(current)</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="dashboard">
            <li className="nav-item active">
              <a className="nav-link pl-3" href="./index.html"><span className="ml-1 item-text">Default</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-3" href="./dashboard-analytics.html"><span className="ml-1 item-text">Analytics</span></a>
            </li>
           
          </ul>
        </li>
      </ul>
      <p className="text-muted nav-heading mt-4 mb-1">
        <span>Components</span>
      </p>
      <ul className="navbar-nav flex-fill w-100 mb-2">
        <li className="nav-item dropdown">
          <a href="#ui-elements" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-box fe-16"></i>
            <span className="ml-3 item-text">Modules</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="ui-elements">
            <li className="nav-item">
            <NavLink className="nav-link pl-3" to={'/module/new'}><span className="ml-1 item-text">Create New module</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pl-3" to={'/module/all'}><span className="ml-1 item-text">Modules</span></NavLink>
            </li>
          </ul>
        </li>
       
        <li className="nav-item dropdown">
          <a href="#forms" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-layers fe-16"></i>
            <span className="ml-3 item-text">Sections</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="forms">
            <li className="nav-item">
              <NavLink className="nav-link pl-3" to={'/section/new'}><span className="ml-1 item-text">New Section</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pl-3" to={'/section/all'}><span className="ml-1 item-text">Sections</span></NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#forms" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-credit-card fe-16"></i>
            <span className="ml-3 item-text">Answer Groups</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="forms">
            <li className="nav-item">
              <NavLink className="nav-link pl-3" to={'/answer-group/new'}><span className="ml-1 item-text">New Answer Group</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pl-3" to={'/answer-group/all'}><span className="ml-1 item-text">Answer Groups</span></NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#tables" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-grid fe-16"></i>
            <span className="ml-3 item-text">Question</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="tables">
            <li className="nav-item">
              <a className="nav-link pl-3" href="./table_basic.html"><span className="ml-1 item-text">Basic Tables</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-3" href="./table_advanced.html"><span className="ml-1 item-text">Advanced Tables</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-3" href="./table_datatables.html"><span className="ml-1 item-text">Data Tables</span></a>
            </li>
          </ul>
        </li>
        
      </ul>
      <p className="text-muted nav-heading mt-4 mb-1">
        <span>Apps</span>
      </p>
      <ul className="navbar-nav flex-fill w-100 mb-2">
        <li className="nav-item w-100">
          <a className="nav-link" href="calendar.html">
            <i className="fe fe-calendar fe-16"></i>
            <span className="ml-3 item-text">Calendar</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a href="#contact" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-book fe-16"></i>
            <span className="ml-3 item-text">Users</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="contact">
            <a className="nav-link pl-3" href="./contacts-list.html"><span className="ml-1">Contact List</span></a>
            <a className="nav-link pl-3" href="./contacts-grid.html"><span className="ml-1">Contact Grid</span></a>
            <a className="nav-link pl-3" href="./contacts-new.html"><span className="ml-1">New Contact</span></a>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#profile" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-user fe-16"></i>
            <span className="ml-3 item-text">Tests</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="profile">
            <a className="nav-link pl-3" href="./profile.html"><span className="ml-1">Overview</span></a>
            <a className="nav-link pl-3" href="./profile-settings.html"><span className="ml-1">Settings</span></a>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#fileman" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-folder fe-16"></i>
            <span className="ml-3 item-text">File Manager</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="fileman">
            <a className="nav-link pl-3" href="./files-list.html"><span className="ml-1">Files List</span></a>
            <a className="nav-link pl-3" href="./files-grid.html"><span className="ml-1">Files Grid</span></a>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#support" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-compass fe-16"></i>
            <span className="ml-3 item-text">Help Desk</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="support">
            <a className="nav-link pl-3" href="./support-center.html"><span className="ml-1">Home</span></a>
            <a className="nav-link pl-3" href="./support-tickets.html"><span className="ml-1">Tickets</span></a>
            <a className="nav-link pl-3" href="./support-ticket-detail.html"><span className="ml-1">Ticket Detail</span></a>
            <a className="nav-link pl-3" href="./support-faqs.html"><span className="ml-1">FAQs</span></a>
          </ul>
        </li>
      </ul>
      <p className="text-muted nav-heading mt-4 mb-1">
        <span>Extra</span>
      </p>
      <ul className="navbar-nav flex-fill w-100 mb-2">
        <li className="nav-item dropdown">
          <a href="#pages" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-file fe-16"></i>
            <span className="ml-3 item-text">Pages</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100 w-100" id="pages">
            <li className="nav-item">
              <a className="nav-link pl-3" href="./page-orders.html">
                <span className="ml-1 item-text">Orders</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-3" href="./page-timeline.html">
                <span className="ml-1 item-text">Timeline</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-3" href="./page-invoice.html">
                <span className="ml-1 item-text">Invoice</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-3" href="./page-404.html">
                <span className="ml-1 item-text">Page 404</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-3" href="./page-500.html">
                <span className="ml-1 item-text">Page 500</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-3" href="./page-blank.html">
                <span className="ml-1 item-text">Blank</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#auth" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-shield fe-16"></i>
            <span className="ml-3 item-text">Authentication</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="auth">
            <a className="nav-link pl-3" href="./auth-login.html"><span className="ml-1">Login 1</span></a>
            <a className="nav-link pl-3" href="./auth-login-half.html"><span className="ml-1">Login 2</span></a>
            <a className="nav-link pl-3" href="./auth-register.html"><span className="ml-1">Register</span></a>
            <a className="nav-link pl-3" href="./auth-resetpw.html"><span className="ml-1">Reset Password</span></a>
            <a className="nav-link pl-3" href="./auth-confirm.html"><span className="ml-1">Confirm Password</span></a>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#layouts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-layout fe-16"></i>
            <span className="ml-3 item-text">Layout</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="layouts">
            <li className="nav-item">
              <a className="nav-link pl-3" href="./index.html"><span className="ml-1 item-text">Default</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-3" href="./index-horizontal.html"><span className="ml-1 item-text">Top Navigation</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-3" href="./index-boxed.html"><span className="ml-1 item-text">Boxed</span></a>
            </li>
          </ul>
        </li>
      </ul>
      <p className="text-muted nav-heading mt-4 mb-1">
        <span>Documentation</span>
      </p>
      <ul className="navbar-nav flex-fill w-100 mb-2">
        <li className="nav-item w-100">
          <a className="nav-link" href="../docs/index.html">
            <i className="fe fe-help-circle fe-16"></i>
            <span className="ml-3 item-text">Getting Start</span>
          </a>
        </li>
      </ul>
      <div className="btn-box w-100 mt-4 mb-1">
        <a href="https://themeforest.net/item/tinydash-bootstrap-html-admin-dashboard-template/27511269" target="_blank" className="btn mb-2 btn-primary btn-lg btn-block">
          <i className="fe fe-shopping-cart fe-12 mx-2"></i><span className="small">Buy now</span>
        </a>
      </div>
    </nav>
  </aside>

)



}
export default Sidebar