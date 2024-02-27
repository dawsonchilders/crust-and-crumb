import sendRequest from './send-request';

const BASE_URL = '/api/starters';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function createStarter(starterData) {
  return sendRequest(BASE_URL, 'POST', starterData);
}

export function updateStarter(starterId, starterData) {
  return sendRequest(`${BASE_URL}/${starterId}`, 'PUT', starterData);
}

export function deleteStarter(starterId) {
  return sendRequest(`${BASE_URL}/${starterId}`, 'DELETE')
}