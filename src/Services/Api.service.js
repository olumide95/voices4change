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
    attended_protest,
    comment
  ) => {
    console.log({
      name: name,
      email: email,
      country: country,
      zip_code: zipcode,
      motivation: motivation,
      message: message,
      attended_protest: attended_protest,
      comment: comment,
    });
    return await axios
      .post("/submit", {
        name: name,
        email: email,
        country: country,
        zip_code: zipcode,
        motivation: motivation,
        message: message,
        attended_protest: attended_protest,
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

  export: async () => {
    return await axios
      .get("/export", {
        responseType: "blob",
      })
      .then((res) => {
        return Promise.resolve(res.data);
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  },
};

export { ApiService };
