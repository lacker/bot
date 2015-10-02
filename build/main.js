'use strict';

var Slack = require('slack-client');

var token = 'xoxb-11756481184-QrFa2CKpvM7vYUbzW3ofoF7S';
var autoReconnect = true;
var autoMark = true;

var slack = new Slack(token, autoReconnect, autoMark);

slack.on('open', function () {
  conso.log('connected.');
});
//# sourceMappingURL=main.js.map
