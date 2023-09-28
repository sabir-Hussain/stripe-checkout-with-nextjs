
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function POST (request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();


    const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [
        {
        price: data.priceId,
        // For metered billing, do not pass quantity
        quantity: 1,
        },
    ],
    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    success_url: process.env.BASE_URL + '/thankyou?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: process.env.BASE_URL,
    // success_url: 'https://localhost:3000/success.html?session_id={CHECKOUT_SESSION_ID}',
    // cancel_url: 'https://localhost:3000/canceled.html',
    });

    // return NextResponse.redirect(session.url, { status: 303 });
    return NextResponse.json(session.url);

}