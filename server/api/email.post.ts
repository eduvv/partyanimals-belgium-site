import Mailgun from "mailgun.js";
import FormData from "form-data";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log("sending email with body:", body);

    const messageText = typeof body === 'object' ? JSON.stringify(body) : String(body);

    const mailgun = new Mailgun(FormData);
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;

    const mg = mailgun.client({
        username: 'api',
        key: apiKey || 'key-yourkeyhere'
    });

    try {
        console.log("MAILGUN_API_KEY:", process.env.MAILGUN_API_KEY ? "exists" : "missing");
        console.log("MAILGUN_DOMAIN:", process.env.MAILGUN_DOMAIN ? "exists" : "missing");
        console.log("Domain:", domain, typeof domain);
        console.log("API Key:", apiKey, typeof apiKey);
        console.log("Body:", body, typeof body);
        console.log("Message Payload:", {
            from: `Excited User <mailgun@${domain}>`,
            to: ["info@edito.dev", "edwardvanvlasselaer@hotmail.com"],
            subject: "Hello",
            text: `Testing some Mailgun awesomeness!\n\nDetails:\n${messageText}`,
            html: `
        <h1>Testing some Mailgun awesomeness!</h1>
        <pre>${messageText}</pre>
    `
        });

        const msg = await mg.messages.create(String(domain), {
            from: `Excited User <mailgun@${String(domain)}>`,
            to: ["info@edito.dev", "edwardvanvlasselaer@hotmail.com"],
            subject: "Hello",
            text: `Testing some Mailgun awesomeness! \n\nDetails:\n${messageText}`,
            html: `
            <h1>Testing some Mailgun awesomeness!</h1>
            <pre>${messageText}</pre>
        `
        });

        console.log('Email sent successfully:', msg);
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Failed to send email:', error);
        throw createError({
            statusCode: 500,
            message: 'Failed to send email'
        });
    }
})