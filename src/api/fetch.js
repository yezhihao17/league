import axios from "axios";
// import Url from "./url";

const instance = axios.create({
  // baseURL: Url.baseUrl,
  timeout: 10000
});

function fetch(url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    instance({
      method,
      url,
      data
    })
      .then(res => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.statusText);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default fetch;
