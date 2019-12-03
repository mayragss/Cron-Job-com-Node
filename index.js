const cron = require("node-cron");
const express = require("express");
const nodeMailer = require('nodemailer');

app = express();

// agendando as tasks para rodarem no servidor
cron.schedule("* * * * *", function () {
    console.log("Running Cron Job");

    let transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true para 465, false para outras portas
        auth: {
            user: '<TEST_USER>', // adiciona o teu user
            pass: '<TEST_PASSWORD>' // adiciona a tua senha
        }
    });

    const mailOptions = {
        from: '"Mayra Gomes" <contacto@maygomes.com>', // emil de envio
        to: 'jane.doe@example.com', // lista de emails que irão receber
        subject: 'Olá!', // assunto
        text: 'Texto da Mensagem', // mensagem
        html: '<b>Texto do html :)</b>' // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        console.log(info.messageId);
        if (err) {
            console.log(err);
        }
    });
});

app.listen(8000);