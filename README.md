# Welcome to my hot dog store!

I chose to build off of DPS's slick React Search, and lightweight "cart". The pins are hilarious. I futzed with building a Flask+Jinja/React hybrid for a while, but struggled to get Jinja to play nice with additional React components, so I just reimplemented everything in React+Express. His code is only used for design and the initial Search, the rest is my own or from the docs.

Design is minimal. Hot Dogs are plentiful. Enjoy!

##Getting Started

Please run `yarn install` or `npm install` to collect all dependencies for this project.

Create a .env file at '/stripe-takehome/' and add your Stripe Keys: STRIPE_SECRET_API_KEY for your secret/server key, and STRIPE_CLIENT_API_KEY for your client. (Not the most secure, but not hardcoded).

Run `npm run dev` to start the server and client app at once. Head over to `localhost:3000` and take a gander!