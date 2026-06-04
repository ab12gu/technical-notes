# Custom Email

Nagee:

- "heard email hosting can be a nightmare. Lots of issues with your email getting detected as spam"

For domain hosting services, you can create a custom email with that domain. It allows you to forward your custom email domain to another email. 

However, it doesn't provide an `smtp` port or any way to send out emails!

## Options

Actually [mailgun](https://www.mailgun.com/) works for free!

- used python script w/ mailgun `api endpoint` to send email
- TODO: check if connect api to gmail

There are low cost options:

- [zoho.com](https://zoho.com)
- [brevo.com](https://brevo.com)
    - actually got this one to work for free
    - but they add a signature at the bottom :(
- [fastmail.com](https://fastmail.com)
    - Nagee uses this!!! and pays!!!
- [Amazon SES](https://aws.amazon.com/ses)

