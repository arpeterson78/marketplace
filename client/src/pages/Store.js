import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import InputField from "../components/InputField";
import API from "../utils/API";

class Store extends Component {
    constructor() {
        super();
        this.state = {
            allItems: [],
            cartItems: []
        };
    }

    componentDidMount = () => {
        API.getItems().then((response) => {
            console.log(response.data);
            this.setState({ allItems: response.data })


        })
    }

    searchItem = (event) => {
        event.preventDefault();
        let item = event.target.children[0].children[0].children[0].children[0].value;
        if (item === "") {
            item = "all"
        }
        API.searchItem(item).then((response) => {
            console.log(response.data);
            this.setState({ allItems: response.data })
        })

    }



    render() {

        return (

            <div>
                <h1 style={{ marginLeft: "20px" }}>Store</h1>
                <form onSubmit={this.searchItem}>
                    <InputField />
                </form>
                <div className="row">
                    {this.state.allItems.map((el, i) => (
                        <ItemCard allItems={this.state.allItems} attribute={el} key={i} />
                    ))}
                </div>
                <div style={{
                    textAlign: "center"
                }}>
                    <button className="btn" style={{ backgroundColor: "rgb(241, 223, 54)" }}>Checkout</button>
                </div>

            </div>




        );
    }

}

export default Store;