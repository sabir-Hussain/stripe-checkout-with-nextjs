import PricingCard from "./PricingCard";

function PricingSection({ pricingItems }) {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {pricingItems &&
        pricingItems.map((pricingItem) => (
          <PricingCard key={pricingItem.id} pricingItem={pricingItem} />
        ))}
    </div>
  );
}

export default PricingSection;
