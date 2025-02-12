import { v4 as uuid } from 'uuid';
const createClientId = () => {
    return uuid();
};

const getClientId = () => {
    const clientId = localStorage.getItem('clientId');
    return clientId;
};

const setClientId = (clientId) => {
    localStorage.setItem('clientId', clientId);
};

export const initClientId = () => {
    let clientId = getClientId();
    if (!clientId) {
        clientId = createClientId();
        setClientId(clientId);
    }
};