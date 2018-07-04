'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commands = require('./commands/commands.js');

var _commands2 = _interopRequireDefault(_commands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const msgParser = bot => {

  bot.on('message', msg => {
    const string = msg.content;
    const cmds = ['help', 'invites', 'top', 'membercount', 'set'];

    if (msg.toString().substring(0, 1) === '/') {
      // if prefix is used
      const args = msg.toString().substring(1).split(' ');
      const cmd = args[0];
      const subcmd = args[1];
      (0, _commands2.default)(bot, msg, cmd, subcmd);
    } else if (msg.mentions.users.has(bot.user.id)) {
      // if bot is mentioned
      const args = msg.toString().split(' ');
      const cmd = args[1];
      const subcmd = args[2];
      (0, _commands2.default)(bot, msg, cmd, subcmd);
    }
  });
};

exports.default = msgParser;