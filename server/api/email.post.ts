import Mailgun from "mailgun.js";
import formData from "form-data";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log("sending email with body:", body);

    const mailgun = new Mailgun(formData);
    let apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;

    const mg = mailgun.client({
        username: 'api',
        key: apiKey || 'key-yourkeyhere'
    });

    console.log(apiKey, domain)

    mg.messages.create(domain, {
        from: `Excited User <mailgun@${domain}>`,
        to: ["info@edito.dev","edwardvanvlasselaer@hotmail.com"],
        subject: "Hello",
        text: "Testing some Mailgun awesomeness! text" + body,
        html: "<h1>Testing some Mailgun awesomeness! html</h1>" + body
    })
        .then((msg) => console.log(msg))
        .catch((err) => console.log(err));
    return "hihi"
})