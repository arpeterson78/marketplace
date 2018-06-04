import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

class Store extends Component {
    constructor() {
        super();
        this.state = {
            allItems: {}
        };
    }

    componentDidMount() {
        API.getItems().then(function (response) {
            console.log(response.data[0]);
        })
    }


    render() {

        return (
            <div>
                <h1>Store</h1>

            </div>

        );
    }

}

export default Store;