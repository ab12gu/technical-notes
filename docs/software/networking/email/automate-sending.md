# Automate Sending

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

## GMAIL

- for gmail: [https://developers.google.com/workspace/gmail/imap/imap-smtp](https://developers.google.com/workspace/gmail/imap/imap-smtp)
    - outgoing SMTP server, smtp.gmail.com, supports TLS, `port 587`
- [https://support.google.com/mail/answer/22839?hl=en#zippy=%2Cyou-have-reached-a-limit-for-sending-mail](https://support.google.com/mail/answer/22839?hl=en#zippy=%2Cyou-have-reached-a-limit-for-sending-mail)


