import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/characters'

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (characterId) => {
  const result = await request.get(`${baseUrl}/${characterId}`,);

  return result;
}

export const getLatest = async () => {
  // const query = new URLSearchParams({
  //     sortBy: `_createdOn desc`,
  //     offset: 0,
  //     pageSize: 3,
  // });

  const query = encodeURIComponent(`offset=0&pageSize=3`);
  console.log(query);
  const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);

  return result;
}

export const create = async (characterData) => {
  const result = await request.post(baseUrl, characterData);

  return result;
};

export const edit = async (characterId, characterData) => {
  const result = await request.put(`${baseUrl}/${characterId}`, characterData);

  return result;
};

export const remove = async (characterId) => request.remove(`${baseUrl}/${characterId}`);
