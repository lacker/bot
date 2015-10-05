let Slack = require('slack-client');

let token = 'xoxb-11756481184-QrFa2CKpvM7vYUbzW3ofoF7S';
let autoReconnect = true;
let autoMark = true;

let slack = new Slack(token, autoReconnect, autoMark);

slack.on('open', () => {
  console.log('connected.');
});

let canned = {
  'hi': 'hi $name',
  'cool': ':sunglasses:',
};

slack.on('message', (message) => {
  console.log('saw message:', message.text);
  let channel = slack.getChannelGroupOrDMByID(message.channel);
  let user = slack.getUserByID(message.user);
  if (canned[message.text]) {
    let response = canned[message.text];
    response = response.replace('$name', user.name);
    channel.send(response);
  }
});

slack.on('error', (error) => {
  console.log('saw an error:', error);
});

slack.login();
