import React, { Component } from "react";

class InputField extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (

            <div style={{ marginLeft: "20px" }}>
                <span><div className="input-field" style={{ width: "35%" }}>
                    <input id="input_text" type="text" data-length="10" placeholder="Search for an Item" />
                </div></span>
            </div>

        )

    }
}

export default InputField;