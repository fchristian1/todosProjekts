import { fetchApi } from "../servcies/fetch";
import { getTokenLocalStorage, initToken, newToken, refreshToken } from "./token";

export const isUserLogin = () => {
    const token = getTokenLocalStorage();

    return token ? true : false;
}

export const login = async (username, password) => {
    const data = await fetchApi('auth/login', 'POST', { username, password });
    const loginToken = data.loginToken;
    newTokenToken(loginToken);
}