const sgMail = require("@sendgrid/mail")


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: "alim3733@outlook.com",
        subject: "Thanks for joining in",
        text: `Welcome to the app, ${name}. Let me know how you get along.`
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:"alim3733@outlook.com",
        subject: "Goodbye!",
        text: `goodbye, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}