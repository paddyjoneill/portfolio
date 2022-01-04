const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = process.env

exports.handler =  async (event, context, callback) => {

    const payload = JSON.parse(event.body)
    const { name, email, message } = payload

    const subject = 'New email enquiry from ' + name

    sgMail.setApiKey(SENDGRID_API_KEY)

    const body = Object.keys(payload).map((k) => {
        return `${k}: ${payload[k]}`
    }).join("<br><br>");

    const msg = {
        to: 'info@patsstats.co.uk',
        from: 'paddyjoneill@hotmail.com',
        subject: subject ? subject : 'Contact Form Submission',
        html: message,
    };

    try{
        await sgMail.send(msg)
        
        return {
            statusCode: 200,
            body: "Message sent"
        }
    } catch(e){
        return {
            statusCode: e.code,
            body: e.message
        }
    }
};