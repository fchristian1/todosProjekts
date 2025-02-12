import { fetchApi } from "../services/fetch";
import { events } from "./events";

export const getTokenLocalStorage = () => {
    const token = localStorage.getItem('token');
    events.emit('getToken', token);
    return token;
};

const setTokenLocalStorage = (token) => {
    localStorage.setItem('token', token);
    events.emit('setToken', token);
}

export const removeTokenLocalStorage = () => {
    localStorage.removeItem('token');
    events.emit('removeToken');
};

export const refreshToken = async () => {
    const data = await fetchApi('auth/refresh', 'POST', { token: getTokenLocalStorage() })
    setTokenLocalStorage(data.token);

};

export const initToken = () => {
    const token = getTokenLocalStorage();
    if (token !== null) {
        refreshToken();
    }
};
export const newToken = async (loginToken) => {
    if (getTokenLocalStorage() === null) {
        const data = await fetchApi('auth/refresh', 'POST', { loginToken });
        setTokenLocalStorage(data.token);
        events.emit('login');
    }
};