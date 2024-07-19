import Stripe from "stripe";

export const stripe = new Stripe(process.env.PUBLIC_STRIPE_SECRET_KEY!, {
    apiVersion: "",
    typescript: true,
});