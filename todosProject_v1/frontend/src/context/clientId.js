const createClientId = () => {
    return crypto.randomUUID();
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