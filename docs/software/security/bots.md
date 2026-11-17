# Bots

[https://en.wikipedia.org/wiki/Robots.txt](https://en.wikipedia.org/wiki/Robots.txt)

The **Robots Exclusion Protocol** (often referred to as *robots.txt*) is used to indicate visiting web crawlers/robotics if they are allowed to visit specific files or directories. 

Developed in 1994, but has no detrement if not followed... Since 2020, it is used against generative AI. However, bots often get sued over lack of compliance, [examples](https://en.wikipedia.org/wiki/Robots.txt#Compliance). Google turned it into a published standard in 2022 (submitted in 2019).

Each subdomain needs to have its own robots.txt file.

Example: First disallow states to hide entire website from bots. The second disallow is redundant but specifies a page. Crawler delay stops server overload. You can also specify type of bot like GPTBot and block it specifically.
```
User-agent: *
Disallow: /
Disallow: /learning/bots/what-is-a-bot/
Crawl-delay: 8
```

## Links

- [https://www.cloudflare.com/learning/bots/what-is-robots-txt/](https://www.cloudflare.com/learning/bots/what-is-robots-txt/)
    - good examples/implementation
- [https://developers.google.com/search/docs/crawling-indexing/robots/intro](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
    - superficial info

