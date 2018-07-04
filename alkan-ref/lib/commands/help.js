'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const help = (bot, msg, cmd) => {
  const richEmbed = new _discord2.default.RichEmbed();

  msg.channel.send({
    embed: richEmbed.setColor('#ffffff').setDescription(`${"`" + "/davetlerim" + "`"} - Sunucuya Davet ettiğiniz kişi sayısını gösterir.
${"`" + "/top <#>" + "`"} - # Belirtiğiniz sayı aralığındaki top listeyi gösterir.
${"`" + "/üye" + "`"} - Sunucuda kaç kişi bulunduğunu gösterir.
${"`" + "/değiştir <kanal-adı>" + "`"} - sadece belirtiğiniz kanaldan gelen davetleri geçerli sayar. ${"`" + "<kanal-adı>" + "`"}
${"`" + "/değiştir default" + "`"} - Bütün davetleri geçerli sayar gösterir.`)
  });
};

exports.default = help;