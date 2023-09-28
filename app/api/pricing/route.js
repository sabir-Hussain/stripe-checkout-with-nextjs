import stripe, { Stripe } from 'stripe';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get("productId");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const products = await stripe.prices.list({
    product: productId,
  });

  return NextResponse.json(products);
  // return NextResponse.json("Hello World pricing");
  
}