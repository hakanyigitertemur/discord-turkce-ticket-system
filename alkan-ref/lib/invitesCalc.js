'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

var _roles = require('../roles.json');

var _roles2 = _interopRequireDefault(_roles);

var _invites = require('./commands/invites.js');

var _invites2 = _interopRequireDefault(_invites);

var _updateme = require('./commands/updateme.js');

var _updateme2 = _interopRequireDefault(_updateme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const invitesCalc = (bot, msg, cmd) => {
  const richEmbed = new _discord2.default.RichEmbed();
  let user = msg.author.id;
  let max = 0;
  let numberUses;
  let invites = msg.guild.fetchInvites().then(result => {
    let inviteArr = result.array();
    for (let i = 0; i < inviteArr.length; i++) {
      let invite = inviteArr[i];
      if (invite.inviter.id === user) {
        numberUses = invite.uses;

        if (numberUses > max) {
          max = numberUses;
        }
      }
    }
    numberUses = max;

    let roleNames = Object.keys(_roles2.default);
    let roleNums = Object.values(_roles2.default);

    let nextRole;
    let roleNumber;
    if (numberUses < roleNums[0]) [nextRole, roleNumber] = [roleNames[0], roleNums[0]];else if (numberUses < roleNums[1]) [nextRole, roleNumber] = [roleNames[1], roleNums[1]];else if (numberUses < roleNums[2]) [nextRole, roleNumber] = [roleNames[2], roleNums[2]];else if (numberUses < roleNums[3]) [nextRole, roleNumber] = [roleNames[3], roleNums[3]];else if (numberUses < roleNums[4]) [nextRole, roleNumber] = [roleNames[4], roleNums[4]];else if (numberUses < roleNums[5]) [nextRole, roleNumber] = [roleNames[5], roleNums[5]];else if (numberUses >= roleNums[5]) {
      msg.channel.send({
        embed: richEmbed.setColor('#ffffff').setDescription(`You are the highest role of **${roleNames[5]}** with ${numberUses} invites.`)
      });
      (0, _updateme2.default)(msg, numberUses, numberLeft, nextRole);
      return; // no further calculation needed
    }
    let numberLeft = roleNumber - numberUses;
    let hasInviteLink = true;
    if (isNaN(numberLeft) && numberUses === 0) hasInviteLink = false;

    if (hasInviteLink) {
      (0, _invites2.default)(msg, numberUses, numberLeft, nextRole);
      (0, _updateme2.default)(msg, numberUses, numberLeft, nextRole);
    } else {
      msg.channel.send({
        embed: richEmbed.setColor('#ffffff').setDescription(`You must create an invite link.`)
      });
      return;
    }
  });
};

exports.default = invitesCalc;