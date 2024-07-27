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
/**
 * 
 * @param {string} username 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */

export const register = (username, email, password) => {
    const authData = requester.post(`${BASE_URL}/register`, {username, email, password });

    return authData;
};
