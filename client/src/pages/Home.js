import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Home extends Component {
    constructor() {
        super();

    }


    render() {

        return (
            <div>
                <div id="homepage-header">
                    <h1 style={{ fontSize: "90px" }}> WELCOME!</h1>
                    <p style={{ fontSize: "25px" }}>Click below to start shopping.</p>
                </div>
                <div id="shop-button">
                    <Link to='/store'><button className="waves-effect waves-light btn">Shop</button></Link>

                </div>


            </div>

        );
    }

}

export default Home;

