import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (<Fragment><div className="Homediv1 d-none d-xl-block ">
            <div className="text-bold text-end homediv1 p-0 pb-0" style={{ backgroundColor: "#0a472e" }}>
                <Link className="text-white m-2" to="/" style={{ textDecoration: "none" }}>ABOUT</Link>
                <Link className="text-white m-2" to="/" style={{ textDecoration: "none" }}>FAQ</Link>
                <Link className="text-white me-5 pe-4" to="/" style={{ textDecoration: "none" }}>CONTACT US</Link>
            </div>
        </div>
        </Fragment>)
    }
}
export default Home;

