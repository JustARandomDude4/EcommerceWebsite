import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'https://ecommerce-21fc8.firebaseapp.com/api'
});

export default instance;