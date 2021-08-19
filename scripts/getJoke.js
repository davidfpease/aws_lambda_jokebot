const axios = require("axios");

const getJoke = async ()=> {
  const headers = { 
    'Accept': 'application/json',
    "User-Agent": "My Github (https://github.com/davidfpease)"
  }

  return axios
    .get("https://icanhazdadjoke.com/", {headers: headers})
    .then((res) => {
      return res.data.joke
    })
    .catch((err) => {
      console.log("Dad Joke API error.");
      console.log(err);
      return "What happens when the joke API breaks?  You get the same joke over and over."
    })
}

module.exports = {
  getJoke
}