# Email

## MIME

[https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types)

## SMTP 

[SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) (Simple mail transfer protocol) is used instead of HTTP to send emails... dumb

- generally uses port 465 or 587
- dictates how email messages should be formatted/encripted/relayed between mail servers
- for gmail: [https://developers.google.com/workspace/gmail/imap/imap-smtp](https://developers.google.com/workspace/gmail/imap/imap-smtp)
    - outgoing SMTP server, smtp.gmail.com, supports TLS, `port 587`

(UNSURE) Some popular email services like Gmail don’t allow you to use the standard SMTP and IMAP protocols to access their services

- So module `EZGmail` surcumvents it? LIES!! It works via SMTP!

```bash
$ import smtplib
$ smtp = smtplib.SMTP('smtp.gmail.com', 587)
$ smtp.ehlo()
$ smtp.ttls() # create secure connection
```

```bash
# CREDENTIALS
# Create app password (same username)
# https://support.google.com/mail/?p=InvalidSecondFactor
```

```bash
$ smtpObj.login('ab18gu@gmail.com', '<app-password>')
$ smtpObj.sendmail('ab18gu@gmail.com', 'you@gmail.com', 'Subject: This is automated\nweird...')
$ smtpObj.quit()
```

## IMAP
[IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) (Internet Message Access Protocol) used to recieve emails... dumb

- generally listens on port 143

In addition to these, some security protocols are embedded into these protocols. 



