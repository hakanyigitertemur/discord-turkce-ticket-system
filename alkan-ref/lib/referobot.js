'use strict';

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _auth = require('../auth.json');

var _auth2 = _interopRequireDefault(_auth);

var _msgParser = require('./msgParser.js');

var _msgParser2 = _interopRequireDefault(_msgParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.listen(5433, () => {
  console.log('Server started');
});

// Configure logger settings
_winston2.default.remove(_winston2.default.transports.Console);
_winston2.default.add(_winston2.default.transports.Console, {
  colorize: true
});
_winston2.default.level = 'debug';

const TOKEN = _auth2.default.token;
// const DBOT_TOKEN = auth.dbot_token;
// const PWBOT_TOKEN = auth.pwbot_token;

const bot = new _discord2.default.Client({
  token: TOKEN,
  autorun: true
});

bot.on('ready', evt => {
  _winston2.default.info('Connected');
  _winston2.default.info('Logged in as: ');
  _winston2.default.info(bot.user.username + ' - ' + bot.user.id);

  bot.user.setPresence({ status: 'online', game: { name: `>help | ${bot.guilds.size} servers`, type: 0 } });
});

(0, _msgParser2.default)(bot);

bot.login(TOKEN);