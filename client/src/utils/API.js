import axios from "axios";

export default {
    getItems: function () {
        return axios.get(`http://localhost:3001/items`);
    },

    searchItem: function (item) {
        return axios.post(`http://localhost:3001/items/${item}`);
    }



}