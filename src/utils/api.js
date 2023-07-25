import axios from "axios";

const BASE_URL = 'https://test-front.framework.team/';

export const ALL_AUTHORS = BASE_URL + 'authors';
export const ALL_PAINTINGS = BASE_URL + 'paintings';
export const ALL_LOCATION = BASE_URL + 'locations';

let initialParams = {
  q: null,
  authorId: null,
  locationId: null,
  created_gte: null,
  created_lte: null,
  _limit: 12,
  _page: 1,
};

export async function apiPaintings(params = {}) {
  initialParams = {...initialParams, ...params}

  return await axios.get(ALL_PAINTINGS, {
    params: initialParams
  })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        console.log('Ошибка сервера:', response.status, response.statusText);
      }
    })
    .catch((error) => {
      console.error('Ошибка запроса:', error);
    });
}

export async function getAuthors() {
  return await axios.get(ALL_AUTHORS).then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      console.log('Ошибка сервера:', response.status, response.statusText);
    }
  })
    .catch((error) => {
      console.error('Ошибка запроса:', error);
    });
}

export async function getLocations() {
  return await axios.get(ALL_LOCATION).then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      console.log('Ошибка сервера:', response.status, response.statusText);
    }
  })
    .catch((error) => {
      console.error('Ошибка запроса:', error);
    });
}
