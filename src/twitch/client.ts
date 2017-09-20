import * as tmi from "tmi.js";

const twitchClient = secretsJson => {
  const tmiOptions = {
    options: {
      debug: true
    },
    connection: {
      reconnect: true
    },
    identity: {
      username: secretsJson.user,
      password: secretsJson.twitch_user_oauth
    },
    channels: [secretsJson.twitch_channel]
  };

  const client = new tmi.client(tmiOptions);

  const say = (_username: string, message: string) => {
    client.say(secretsJson.twitch_channel, message);
  };

  const setListeners = discordClient => {
    client.on("connected", () =>
      console.log("Connected to Twitch as:", secretsJson.user)
    );

    client.on("chat", (_channel, userstate, message, _self) => {
      discordClient.say(userstate.username, message);
    });
  };

  const connect = () => {
    client.connect();
  };

  return {
    connect: connect,
    say: say,
    setListeners: setListeners
  };
};

export { twitchClient };
