let Slack = require('slack-client');

let token = 'xoxb-11756481184-QrFa2CKpvM7vYUbzW3ofoF7S';
let autoReconnect = true;
let autoMark = true;

let slack = new Slack(token, autoReconnect, autoMark);

slack.on('open', () => {
  console.log('connected.');
});

slack.onMessage((message) => {
  console.log('saw message:', message);
});

slack.login();
