const API_URL = process.env.REACT_APP_API_URL as string;

const ROUTES = {
    home: "/users",
    register: "/register",
    login: "/login",
    createProfile: "/users/create",
    logout: "#"
};

const API_ENDPOINTS = {
    login: `${API_URL}/login`,
    register: `${API_URL}/register`,
}

export {
    ROUTES,
    API_ENDPOINTS,
    API_URL
};