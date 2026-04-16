# DNS

DNS, [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System), provides naming conventions on the internet since 1985.

A DNS server stores the DNS records for a domain. It links the domain name, e.g. wikipedia.org, to the ip address, 208.80.154.224. Sadly, generally can't type in ip address directly into browser due to domain server configurations.

Each DNS record (RR, [resource records](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records)) need to have:

- Type (Generally A or AAAA for ip type)
- Name + Number (domain name, leave blank generally unless specifying subdomain)
- Expiration (time to live)
- Class (optional)
- Type specific data (optional)

NOTE: Github requires 4 ip-address links (+ recommends linking both ip4 & ip6)

Cloudflare requests usage of proxy. It says if used it allows for security features, but in the past if my domain accurately rendered, it used cloudflare landing page... boo.

