import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

class Store extends Component {
    constructor() {
        super();
        this.state = {
            allItems: []
        };
    }

    componentDidMount = () => {
        API.getItems().then((response) => {
            console.log(response.data);
            this.setState({ allItems: response.data })


        })
    }


    render() {

        return (
            <div>
                <h1>Store</h1>
                <div className="row">
                    {this.state.allItems.map((el, i) => (
                        <div key={i} className="col s12 m3">
                            <div className="card" style={{ textAlign: "center" }}>
                                <div className="card-image" style={{ textAlign: "center" }}>
                                    <img src={process.env.PUBLIC_URL + el.image_url} style={{ height: "150px", width: "80px", paddingTop: "10px", display: "inline" }} />
                                </div>
                                <div className="card-content" style={{ paddingTop: "0px" }}>
                                    <h4>{el.product_name}</h4>
                                    <p>Price: ${el.price}</p>
                                    <p>Quantity: {el.quantity}</p>
                                </div>
                                <div className="card-action">
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{
                    textAlign: "center"
                }}>
                    <button className="btn" style={{ backgroundColor: "rgb(255, 231, 16)" }}>Checkout</button>
                </div>

            </div>



        );
    }

}

export default Store;