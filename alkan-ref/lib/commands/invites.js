'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const invites = (msg, numberUses, numberLeft, nextRole) => {
  const richEmbed = new _discord2.default.RichEmbed();
  msg.channel.send({
    embed: richEmbed.setColor('#ffffff').setDescription(`**Senin Bilgilerin ${msg.author}**

:ballot_box_with_check: Kişi Davet Ettin: **${numberUses}**
:trophy: Bulunduğun Roller: ${msg.member.highestRole}
:chart_with_upwards_trend: Davet Etiklerinden Ayrılanlar: **${numberLeft}**
:level_slider: Sonraki Ödülün: ${nextRole}`)
  });
};

exports.default = invites;