import sendRequest from './send-request';

const BASE_URL = '/api/photos';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function upload(formData) {
  return sendRequest(`${BASE_URL}/upload`, 'POST', formData, true);
}

export function deletePhoto(photoId) {
  return sendRequest(`${BASE_URL}/${photoId}`, 'DELETE');
}