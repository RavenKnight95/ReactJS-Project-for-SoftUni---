import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/games'

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (characterId) => {
  const result = await request.get(`${baseUrl}/${characterId}`,);

  return result;
}

export const create = async (characterData) => {
  const result = await request.post(baseUrl, characterData);

  return result;
};