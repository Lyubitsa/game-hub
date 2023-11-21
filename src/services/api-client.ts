import axios from "axios";

// ADDING API with all services and informations that we gonna use
// site of the api : rawg.io

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '76d0dc684e674f988e73ed55d2398ebc'
    }
})