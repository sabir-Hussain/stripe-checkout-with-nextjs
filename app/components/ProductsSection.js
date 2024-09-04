import Stripe from "stripe";
import ProductCard from "./ProductCard";

const ProductsSection = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const products = await stripe.products.list();

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {products &&
        products.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductsSection;
