import requester from "./requester";

const BASE_URL = 'http://localhost:3000';

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */

export const login = (email, password) => {
    const authData = requester.post(`${BASE_URL}/login`, { email, password });
    return authData;
};

export const register = (email, username, password) => {
    const authData = requester.post(`${BASE_URL}/register`, { email, username, password });

    return authData;
};
