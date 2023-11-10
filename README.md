# Serverless-Connect
Serverless Connect AKA No Cost Hosting

To set up scalable cloud hosting you will need the followings 

Cloudflare Account (no paid required)

You will need to login to cloudflare and go to Worker and Pages.
Please follow the below instruction -

1. Create a new Worker
2. Copy worker.js from repository and replace all the existing worker code then deploy and make it active.
3. After deployment you need to create a new KV, please go to KV page under Workers and Pages and create new one.
4. Go back to created worker and go under settings -> variables and find KV Binding.
5. You need to bind the recently created kv by the exact name of "cloudHosting".
6. After binding please go to worker's public web url and go to the /admin route manually
Example - https://workerr-xo918u.xtech.workers.dev/admin
7. You will find the key requesting page and then go to https://www.serverlessconnect.com and get access key.
8. paste the key and start your Cloud Hosting
9. Enjoy scalable and No monthly cost hosting by cloud computing technology.
