'use strict';
const { getJoke } = require("./scripts/getJoke");
const { sendJoke } = require("./scripts/sendJoke");

module.exports.hello = async (event) => {
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hello from your Lambda App",
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports.newMessage = async (event) => {
  console.log(event);

  let body = JSON.parse(event.body);
  let userId = body.data.author.id;  
  let joke = null;

  if(body.data.body.slice(0,5) == "/joke" && body.data.type == "private_note"){
    joke = await getJoke();
    return await sendJoke(body, joke, userId);
  }

  return {
    statusCode: 500,
    body: JSON.stringify(
      {
        message: "Error sending joke to Drift.",
        input: event,
      },
      null,
      2
    ),
  };

};