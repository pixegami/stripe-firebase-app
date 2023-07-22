# Stripe Firebase App

This is a NextJS app that integrates Firebase with Stripe payments (for monthly subscriptions). To try it out, install all the dependencies:

```bash
yarn install
# OR
npm install
```

Then run the development server:

```bash
yarn dev
# OR
npm run dev
```

You'll also need to replace the Firebase SDK keys in `src/firebase.ts` and Stripe price ID in `src/account/page.tsx` with your own stuff.

# Tech Stack

- [Firebase](https://firebase.google.com/) (authentication & backend)
- [Stripe](https://stripe.com/) (payments)
- [NextJS](https://nextjs.org/) (frontend)

You also need [Stripe Payment Extension](https://extensions.dev/extensions/stripe/firestore-stripe-payments) to integrate Stripe with Firebase.
