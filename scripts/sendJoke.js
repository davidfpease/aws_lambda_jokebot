const { getAPIKey } = require("../util/secrets_manager");

const axios = require("axios");

const sendJoke = async (body, joke, userId)=> {
  const apiKey = await getAPIKey();
  let convoId = body.data.conversationId;
  let convoType = body.data.type;
  let url = `https://driftapi.com/conversations/${convoId}/messages`;

  const headers = { 
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
  }

  const payload = JSON.stringify({
    "type": "chat",
    "body": joke,
    "userId": userId
  })

  return axios
    .post(url, payload, {headers: headers})
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log("Error sending joke to Drift.");
      console.log(err);
      return err
    })
}

module.exports = {
  sendJoke
}
