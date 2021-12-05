const axios = require("axios");

const seti = {
  noSignalFound: () => true,
  founders: [
    'Philip Morrison',
    'Giuseppe Cocconi'
  ],
  fetchTelescope: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error')
};

module.exports = seti;