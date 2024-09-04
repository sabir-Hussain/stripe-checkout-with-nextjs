import PricingSection from "@/app/components/PricingSection";
import Stripe from "stripe";

const PricingPage = async ({ params }) => {
  const { slug } = params;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const products = await stripe.products.list();
  const product = products.data.find(
    (product) => product.metadata.slug === slug
  );

  const pricingItems = await stripe.prices.list({
    product: product.id,
  });

  return (
    <div className="container mx-auto px-6">
      {pricingItems && <PricingSection pricingItems={pricingItems.data} />}
    </div>
  );
};

export default PricingPage;
