'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

var _help = require('./help.js');

var _help2 = _interopRequireDefault(_help);

var _invitesCalc = require('../invitesCalc.js');

var _invitesCalc2 = _interopRequireDefault(_invitesCalc);

var _top = require('./top.js');

var _top2 = _interopRequireDefault(_top);

var _membercount = require('./membercount.js');

var _membercount2 = _interopRequireDefault(_membercount);

var _set = require('./set.js');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const commands = (bot, msg, cmd, subcmd) => {
  const richEmbed = new _discord2.default.RichEmbed();
  let currChannel = msg.channel.name;
  if (_set.channelPerm !== undefined && currChannel !== `${_set.channelPerm}`) {
    msg.channel.send({
      embed: richEmbed.setColor('#ffffff').setDescription(`Please use #${_set.channelPerm} to check referrals.`)
    });
  } else {
    if (cmd === 'controlpanel') (0, _help2.default)(bot, msg, cmd);else if (cmd === 'davetlerim') (0, _invitesCalc2.default)(bot, msg, cmd);else if (cmd === 'top' && subcmd) (0, _top2.default)(bot, msg, cmd, subcmd);else if (cmd === 'üye') (0, _membercount2.default)(msg);else if (cmd === 'değiştir') (0, _set2.default)(msg, cmd, subcmd);else return;
  }
};

exports.default = commands;