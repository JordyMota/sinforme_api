const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const { EMAIL, PASSWORD, MAIN_URL } = require("../config");

let transporter = nodemailer.createTransport({
    host: 'smtp.umbler.com',
    port: 587,
    secure: false,
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    },
});

let MailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Nodemailer",
        link: MAIN_URL,
    },
});

const sendHelp = (req, res) => {
    const { mail, name, message } = req.body;

    let response = {
        body: {
            name,
            intro: `
                <p><strong>Nome: </strong> ${name}</p>
                <p><strong>Email: </strong> ${mail}</p>
                <p><strong>Mensagem: </strong> ${message}</p>
            `,
        },
    };

    let mailcode = MailGenerator.generate(response);

    let msg = {
        from: EMAIL,
        to: EMAIL,
        subject: "Ajuda",
        html: mailcode,
    };

    transporter.sendMail(msg).then(() => {
        return res.status(200).json({ msg: "Mensagem enviada com sucesso" });
    }).catch((error) => {
        res.status(500);
    });
};

module.exports = {
    sendHelp,
};