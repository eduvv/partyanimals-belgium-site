import fetch from 'node-fetch';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const messageText = typeof body === 'object' ? JSON.stringify(body) : String(body);

    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const emailFrom = process.env.MAILGUN_FROM;
    const emailTo = process.env.MAILGUN_TO;
    console.log("apiKey: ", apiKey);
    console.log("domain: ", domain);
    console.log("emailFrom: ", emailFrom);
    console.log("emailTo: ", emailTo);

    if (!apiKey || !domain) {
        throw createError({
            statusCode: 500,
            message: 'Mailgun API key or domain is not set in environment variables.',
        });
    }

    // Manually construct form data as a URL-encoded string
    const formData = new URLSearchParams();
    formData.append('from', `Auto Mail <no-reply@mail.edito.dev>`);
    formData.append('to', `${emailTo}`);
    formData.append('subject', 'Nieuwe aanvraag');
    // formData.append('text', `text: Testing some Mailgun awesomeness!\n\nDetails:\n${messageText}`);
    formData.append('html', `
    <h1>Nieuwe aanvraag gemaakt op ${new Date().toLocaleDateString()}!</h1>
    <pre>${messageText}</pre>
  `);

    console.log("data: ", formData);
    try {
        const response = await fetch(`https://api.eu.mailgun.net/v3/${domain}/messages`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('Mailgun API error: ', error);
            console.error('Mailgun response: ', response);
            throw createError({
                statusCode: 500,
                message: `Mailgun API error: ${response.statusText}`,
            });
        }

        const result = await response.json();
        console.log('Email sent successfully:', result);
        return {success: true, message: 'Email sent successfully'};
    } catch (error) {
        console.error('Failed to send email:', error);
        throw createError({
            statusCode: 500,
            message: 'Failed to send email',
        });
    }
});
