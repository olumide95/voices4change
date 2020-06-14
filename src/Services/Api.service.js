import axios from "axios";
const ApiService = {
  baseUrl: "",
  init(baseURL) {
    ApiService.baseUrl = baseURL;
    axios.defaults.baseURL = baseURL;
  },
  submit: async (name, country, state, motivation, message) => {
    console.log({ name, country, state, motivation, message });
    return await axios
      .post("/submit", {
        name: name,
        country: country,
        state: state,
        motivation: motivation,
        message: message,
      })
      .then((res) => {
        return Promise.resolve(res.data);
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  },

  getSubmissions: async () => {
    return await axios
      .get("/submissions")
      .then((res) => {
        return Promise.resolve(res.data);
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  },
};

export { ApiService };
