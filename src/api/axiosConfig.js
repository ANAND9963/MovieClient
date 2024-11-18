import axios from "axios";


const apiClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,  // Dynamic base URL from environment variable
    headers: {
        "ngrok-skip-browser-warning": "true"  // Custom header to skip ngrok warning
    }
});

export default apiClient;
