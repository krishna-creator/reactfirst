const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Total <span className="badge badge-secondary">{props.totalcounter}</span></a>
            </div>
        </nav>
     );
}
 
export default Navbar;