import axios from "axios";
const ApiService = {
  baseUrl: "",
  init(baseURL) {
    ApiService.baseUrl = baseURL;
    axios.defaults.baseURL = baseURL;
  },
  submit: async (
    name,
    email,
    country,
    zipcode,
    motivation,
    message,
    comment
  ) => {
    console.log({
      name,
      email,
      country,
      zipcode,
      motivation,
      message,
      comment,
    });
    return await axios
      .post("/submit", {
        name: name,
        email: email,
        country: country,
        zipcode: zipcode,
        motivation: motivation,
        message: message,
        comment: comment,
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
