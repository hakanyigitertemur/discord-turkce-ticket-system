'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const top = (bot, msg, cmd, subcmd) => {
  const richEmbed = new _discord2.default.RichEmbed();

  let allInvites = msg.guild.fetchInvites().then(result => {
    let sortedInvites = result.array().sort((a, b) => {
      if (a.uses === b.uses) return 0;
      // sort a to lower index than b if a.uses > b.uses
      return a.uses > b.uses ? -1 : 1;
    });

    let largest = subcmd > sortedInvites.length ? sortedInvites.length : subcmd;
    let number = largest > 10 ? 10 : largest;
    let completeString = '';
    for (let i = 0; i < number; i++) {
      let rankString = `${i + 1}. Davetleri: ${sortedInvites[i].uses} - ${sortedInvites[i].inviter.username} \n`;
      completeString += rankString;
    }
    if (subcmd > 10) {
      msg.channel.send({
        embed: richEmbed.setColor('#ffffff').setDescription(`Maksimum 10 kişiyi gösterebilirim. \nİşte top 10:`)
      });
    }
    msg.channel.send({
      embed: richEmbed.setColor('#ffffff').setDescription(`${completeString}`)
    });
  });
};

exports.default = top;