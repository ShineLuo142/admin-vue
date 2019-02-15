import axios from './interceptors'

export default (options) => {
  if (!options.method) {
    options.method = 'post'
  } else {
    options.method = options.method.toLocaleLowerCase();
  }
  return axios({
    ...options
  });
}