import fetch from 'node-fetch';
import {EmailBody} from "~/server/api/EmailBody";
import {PACK} from "~/config/packs";

export default defineEventHandler(async (event) => {
    const body: EmailBody = await readBody(event);

    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const emailFrom = process.env.MAILGUN_FROM;
    const emailTo = process.env.MAILGUN_TO;

    const subject = body.bookingData
        ? `Nieuwe aanvraag voor ${body.contactData.name}`
        : `Nieuw contact voor ${body.contactData.name}`

    if (!apiKey || !domain) {
        throw createError({
            statusCode: 500,
            message: 'Mailgun API key or domain is not set in environment variables.',
        });
    }

    console.log("apiKey: ", apiKey);
    console.log("domain: ", domain);
    console.log("emailFrom: ", emailFrom);
    console.log("emailTo: ", emailTo);
    console.log("subject: ", subject);

    const bookingBody= body.bookingData ? `<pre>
    pakket: ${PACK[body.bookingData.pack]}

    ${body.bookingData?.hours?.amount}x extra uur (€${body.bookingData?.hours?.pricePer}/uur): €${body.bookingData?.hours?.priceTotal}
    ${body.bookingData?.kids?.amount}x extra kids (€${body.bookingData?.kids?.pricePer}/kid): €${body.bookingData?.kids?.priceTotal}
    ${body.bookingData?.pinjata?.amount}x extra pinjata (€${body.bookingData?.pinjata?.pricePer}/pinjata): €${body.bookingData?.pinjata?.priceTotal}
    ${body.bookingData?.workshop?.amount}x extra workshop (€${body.bookingData?.workshop?.pricePer}/workshop): €${body.bookingData?.workshop?.priceTotal}
    ${body.bookingData?.comfort?.amount}x extra comfort pack (€${body.bookingData?.comfort?.pricePer}/pack): €${body.bookingData?.comfort?.priceTotal}
    -------------------------------
    excl btw: €${body.bookingData?.totalExclBtw}
    btw: €${body.bookingData?.btw}
    -------------------------------
    totaal inclusief btw: €${body.bookingData?.totalInclBtw}
    </pre>` : ''

    const contactBody = `<pre>
    naam: ${body.contactData?.name}
    email: ${body.contactData?.email}
    bericht: ${body.contactData?.extraInfo}
    ${body.contactData?._pakket? `pakket: ${body.contactData?._pakket}`: ''}
    </pre>`


    // Manually construct form data as a URL-encoded string
    const formData = new URLSearchParams();
    formData.append('from', `Auto Mail <${emailFrom}>`);
    formData.append('to', `${emailTo}`);
    formData.append('subject', `${subject}`);
    formData.append('html', `
    <h1>Booking</h1>
    ${bookingBody}
    
    ${contactBody}
  `);

    console.log("booking body: ", bookingBody);
    console.log("contact body: ", contactBody);
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
                statusCode: response.status,
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
