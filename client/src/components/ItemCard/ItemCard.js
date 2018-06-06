import React, { Component } from "react";

class ItemCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            (this.props.allItems.length > 0 ?
                <div key={this.props.key} className="col s12 m3">
                    <div className="card" style={{ textAlign: "center" }}>
                        <div className="card-image" style={{ textAlign: "center" }}>
                            <img src={process.env.PUBLIC_URL + this.props.attribute.image_url} style={{ height: "150px", width: "80px", paddingTop: "10px", display: "inline" }} />
                        </div>
                        <div className="card-content" style={{ paddingTop: "0px" }}>
                            <h4>{this.props.attribute.product_name}</h4>
                            <p>Price: ${this.props.attribute.price}</p>
                            <p>Quantity: {this.props.attribute.quantity}</p>
                        </div>
                        <div className="card-action">
                            <button className="btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
                :
                <div><p>No items found. <span><a>Click here</a></span> to see all items.</p></div>)
        );

    }

}

export default ItemCard;