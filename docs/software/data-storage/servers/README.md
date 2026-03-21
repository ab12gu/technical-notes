# Servers

## Cloud

I did some research a few times comparing free available servers on the cloud. There are either dedicated server or serverless server options. The serverless server will allocated space on available parts of a database (rather than a singular dedicated server).

1. The issue is that a lot of cloud servers will shut down when not in use. You could potentially avoid that by creating a cronjob to ping the website after certain intervals to keep it running. 
2. Another issue is that there is very little resources allocated and will charge after a certain amount of pings/data usage. 
    - if you don't put in your credit card info.. they can't really charge... 

Essentially, most cloud servers use AWS server system and create a different interface to interact with including a different business/charging plan. They give better free allocations, but "probably" have higher charges for paying customers. 






