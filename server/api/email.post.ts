import Mailgun from "mailgun.js";
import { createError, defineEventHandler, readBody } from "h3"; // Nuxt's server utilities

export default defineEventHandler(async (event) => {
    // Parse the incoming request body
    const body = await readBody(event);

    // Validate the required fields
    if (!body || !body.email || !body.subject || !body.message) {
        throw createError({
            statusCode: 400,
            message: "Missing required fields: email, subject, or message",
        });
    }

    const { email, subject, message } = body;

    // Initialize Mailgun client
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;

    if (!apiKey || !domain) {
        console.error("Mailgun API configuration is missing");
        throw createError({
            statusCode: 500,
            message: "Internal server error: Mailgun API configuration is incomplete",
        });
    }

    const mailgun = new Mailgun(FormData); // The SDK still needs FormData internally
    const mg = mailgun.client({
        username: "api",
        key: apiKey,
    });

    // Use URLSearchParams for the request body
    const emailPayload = new URLSearchParams({
        from: `Your Website <mailgun@${domain}>`,
        to: email,
        subject,
        text: message,
    }).toString();

    try {
        // Send the email using the SDK
        const response = await mg.messages.create(domain, {
            from: `Your Website <mailgun@${domain}>`,
            to: email,
            subject,
            text: message,
            html: `<p>${message}</p>`,
        });

        return {
            success: true,
            message: "Email sent successfully",
            response,
        };
    } catch (error: any) {
        console.error("Failed to send email:", error);
        throw createError({
            statusCode: 500,
            message: error.message || "Failed to send email",
        });
    }
});
