import axios from "axios";


export default {
    searchnews: function (query) {
        return axios.get(
            "http://newsapi.org/v2/top-headlines?q=" +
            query +
            "&apiKey=20ebd079386145bf8ef379ea799efbf4"
        );
    },
    search: function (charity) {
        return axios.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=3c0fc420&app_key=0c12428e18e7fb50a1af2d2a834c2eaf&search=" + charity + "&rated=true");
    },
    searchName: function (query) {
        return axios.get(
            "https://api.data.charitynavigator.org/v2/Organizations?app_id=3c0fc420&app_key=0c12428e18e7fb50a1af2d2a834c2eaf&search=" +
            query +
            "&searchType=NAME_ONLY&rated=true"
        );
    },

    saveCharity: function (charityData) {
        return axios.post("/api/charities", charityData);
    },

    getCharities: function () {
        return axios.get(`/api/charities`);
    },

    deleteCharity: function (id) {
        return axios.delete("/api/charities/" + id);
    }
};