const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = process.env;

export default function handler(req, res) {
    const payload = req.body;

    const { name, email, phone, message } = payload;

    if (SENDGRID_API_KEY === undefined) {
        res.status(500).json({ message: 'API key missing' });
    }

    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
        to: 'hello@patrickoneill.dev',
        from: 'paddyjoneill@hotmail.com',
        subject: ' from ' + name + ' email ' + email + ' phone' + phone,
        html: message,
    };

    console.log({ msg });

    sgMail
        .send(msg)
        .then(() => res.status(200).json({ message: 'Message Sent' }))
        .catch((e) => res.status(e.code).json({ message: e.message }));
}
