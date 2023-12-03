import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (username, password) => {
  const result = await request.post(`${baseUrl}/login`, {
    username,
    password,
  });


  return result;
}

export const register = async (username, password) => request.post(`${baseUrl}/register`, {
  username,
  password,
})

export const logout = () => request.get(`${baseUrl}/logout`)