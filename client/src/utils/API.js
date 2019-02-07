import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyCUyrPu2PlrnPBfGHrGWLz_81CPN_s8Bv8";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
}