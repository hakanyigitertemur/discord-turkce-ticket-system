'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.channelPerm = undefined;

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

var _checkPerms = require('../checkPerms.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let channelPerm = exports.channelPerm = undefined;

const set = (msg, cmd, subcmd) => {
  const richEmbed = new _discord2.default.RichEmbed();
  if (subcmd === 'default' && (0, _checkPerms.checkAdmin)(msg) === true) {
    exports.channelPerm = channelPerm = undefined;
    msg.channel.send({
      embed: richEmbed.setColor('#ffffff').setDescription(`Referanslar Artık tüm kanalardan geçerli oldu.`)
    });
  } else if ((0, _checkPerms.checkAdmin)(msg) === true) {
    exports.channelPerm = channelPerm = subcmd;
    msg.channel.send({
      embed: richEmbed.setColor('#ffffff').setDescription(`Sadece bu **${channelPerm}** kanaldan oluşturulan davetler geçerli.`)
    });
  } else {
    msg.channel.send({
      embed: richEmbed.setColor('#ffffff').setDescription(`Bu komutu kullanmak için yetkin yok.`)
    });
  }
};

exports.default = set;