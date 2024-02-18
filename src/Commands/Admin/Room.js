const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const { BotOwners } = require('../../../config.js');

module.exports = {
    name: "özeloda",
    aliases: ["ozeloda", "secretroom"],

    execute: async (client, message, args) => {
        if (!BotOwners.some(ertu => message.member.user.id == ertu)) return message.reply({ content: `Yetkin bulunmuyor.` })
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('secretroom')
                    .setLabel('Özel Oda Oluştur')
                    .setStyle(ButtonStyle.Secondary)
            )

        message.channel.send({
            content: `
Merhaba! Özel Oda Sistemine Hoş Geldiniz!

Aşağıdaki **"Özel Oda Oluştur"** düğmesine tıklayarak kendi odanızı anında oluşturabilirsiniz. İyi sohbetler dileriz!

Not: [\` Sesli kanalın sohbet kısmından kanalına özel ayarlar paneline erişebilirsin. \`]
`, components: [row]
        });
    }
}