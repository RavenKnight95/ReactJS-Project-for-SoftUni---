import * as request from "./requester";

const baseUrl = "http://localhost:3030/users";

export const login = (username, password) =>
  request.post(`${baseUrl}/login`, { username, password });

export const logout = async (accessToken) => {
  try {
    const response = await fetch(`${baseUrl}/logout`, {
      headers: {
        "X-Authorization": accessToken,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const register = (username,  password) =>
  request.post(`${baseUrl}/register`, { username, password });

export const getProfile = (userId) => {
  return request.post(`${baseUrl}/profile`, { userId });
};

export const getUser = (username) => {
  return request.get(`${baseUrl}/profiles/${username}`);
};

export const transact = (userId) =>
  request.put(`${baseUrl}/transaction`, { userId });