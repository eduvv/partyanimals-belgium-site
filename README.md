# Partyanimals Belgium
## Config
### Translations
All\* content can be found under `./i18n.config.ts`

\*_Not everything has translations yet due to time constraints._
### Mailgun
`Mailgun dashboard > Send > Sending > Domains`

`> DNS records`
Configure the listed records (Sending records only) in your domains DNS.
<br>
`> Sending API Keys` Create and save API key.

### Netlify
#### Environment Variables:
`Netlify dashboard > Site configuration > Environment variables`
```shell
# API key configured under custom domain in mailgun
# See Mailgun dashboard > Send > Sending > Domains > Sending API Keys
MAILGUN_API_KEY=aaaaaaaaaaaaa123-bcdefghi

# Custom domain configured in mailgun
#See Mailgun dashboard > Send > Sending > Domains
MAILGUN_DOMAIN=mail.website.com 

# Who should receive this mail?
# value can be single or comma-separated: 
# - aaa@aaa.com
# - aaa@aaa.com,bbb@bbb.com,ccc@ccc.com
MAILGUN_TO=aaa@aaa.com

# Name of the mail sender mail, this is what you see in your mailbox.
# ⚠️ domain part should be the same as MAILGUN_DOMAIN
MAILGUN_FROM=no-reply@mail.website.com
```

## Troubleshooting
### Mails are not being sent
- Check logs under Edge Functions in Netlify. `Netlify dashboard > Logs > Edge Functions`
- Check logs in Mailgun (free plan includes a retention of 1 day): `Mailgun dashboard > Send > Sending > Logs`
- Mailgun might have upgraded their api (currently v3) double check all logs for issues and [docs](https://documentation.mailgun.com/docs/mailgun/api-reference/openapi-final/tag/Messages/#tag/Messages/operation/POST-v3--domain-name--messages) for updated
- Double check DNS settings and make sure `Sending records` are all active/verified. `Mailgun dashboard > Send > Sending > Domain settings > DNS records`