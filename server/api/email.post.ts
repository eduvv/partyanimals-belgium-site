import Mailgun from "mailgun.js";
import FormData from "form-data";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log("sending email with body:", body);

    // Ensure body is converted to string if it's an object
    const messageText = typeof body === 'object' ? JSON.stringify(body) : String(body);

    const mailgun = new Mailgun(FormData);
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;

    const mg = mailgun.client({
        username: 'api',
        key: apiKey || 'key-yourkeyhere'
    });

    try {
        const msg = await mg.messages.create(domain, {
            from: `Excited User <mailgun@${domain}>`,
            to: ["info@edito.dev", "edwardvanvlasselaer@hotmail.com"],
            subject: "Hello",
            text: `Testing some Mailgun awesomeness! text ${messageText}`,
            html: `<h1>Testing some Mailgun awesomeness! html</h1>${messageText}`
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