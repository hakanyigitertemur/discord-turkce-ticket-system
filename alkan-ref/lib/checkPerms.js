'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const checkAdmin = exports.checkAdmin = msg => {
  checkNull(msg);
  let admin = msg.member.hasPermission('ADMINISTRATOR');
  return admin;
};

const checkMod = exports.checkMod = msg => {
  checkNull(msg);
  let mod = msg.member.hasPermission('MANAGE_ROLES');
  return mod;
};

// insert null member into cache
const checkNull = exports.checkNull = msg => {
  if (msg.member == null) {
    msg.guild.fetchMember(msg.author, true);
  }
};

exports.default = checkMod;