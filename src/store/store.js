import createStore from "unistore";
import axios from "axios";

const initialState = {
    // data
    listCart: [],
    listProduct: [],
    productName: "",
    productPrice: 0,
    productStock: 0,
    productImage: "",

    // data user
    full_name: "",
    address: "",
    sex: "",
    phone: "",
    email: "",

    // token
    is_login: null,
    username: "",
    password: "",
    user_id: 0,
    token: "",

    // api
    baseUrl: "https://api.zulyano.xyz",
    loginPoint: "/login",
    registerPoint: "/register"
};

export const store = createStore(initialState);

export const actions = store => ({
    // setter methods
    setListCart(state, value) {
        return { listCart: value };
    },
    setListProduct(state, value) {
        return { listProduct: value };
    },
    setIsLogin(state, status) {
        return { is_login: status };
    },
    setToken(state, value) {
        return { token: value };
    },
    logOut(state) {
        return { isLogin: false, token: null };
    },
    setProductName(state, value) {
        return { productName: value };
    },
    setProductPrice(state, value) {
        return { productPrice: value };
    },
    setProductStock(state, value) {
        return { productStock: value };
    },
    setProductImage(state, value) {
        return { productImage: value };
    }
});
