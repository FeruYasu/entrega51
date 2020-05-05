import faker from 'faker';

const { AccessToken } = require('twilio').jwt;

const { VideoGrant } = AccessToken;
const { ChatGrant } = AccessToken;

class TwilioController {
  async getVideo(req, res) {
    // var identity = faker.name.findName();
    // var identity = "Teste";
    const { identity } = req.body;
    // console.log(req.body);

    const T_ACC_SID = process.env.TWILIO_ACCOUNT_SID;
    const T_API_KEY = process.env.TWILIO_API_KEY_SID;
    const T_API_SECRET = process.env.TWILIO_API_KEY_SECRET;

    // Create an access token which we will sign and return to the client,
    // containing the grant we just created
    const token = new AccessToken(T_ACC_SID, T_API_KEY, T_API_SECRET);
    // Assign the generated identity to the token
    token.identity = identity;

    const grant = new VideoGrant();
    // Grant token access to the Video API features
    token.addGrant(grant);

    // Serialize the token to a JWT string and include it in a JSON response
    res.send({
      identity: token.identity,
      token: token.toJwt(),
    });
  }

  async getChat(req, res) {
    // var identity = faker.name.findName();
    // const identity = request.params.identity;
    const { identity } = req.body;

    const T_ACC_SID = process.env.TWILIO_ACCOUNT_SID;
    const T_API_KEY = process.env.TWILIO_API_KEY_SID;
    const T_API_SECRET = process.env.TWILIO_API_KEY_SECRET;

    // Create an access token which we will sign and return to the client,
    // containing the grant we just created

    const token = new AccessToken(T_ACC_SID, T_API_KEY, T_API_SECRET);
    // Assign the generated identity to the token
    token.identity = identity;

    token.addGrant(
      new ChatGrant({
        serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
      })
    );
    // Grant token access to the Chat API features

    // Serialize the token to a JWT string and include it in a JSON response
    res.send({
      identity: token.identity,
      token: token.toJwt(),
    });
  }
}

export default new TwilioController();
