import SubscribeButton from './SubscribeButton';

function PricingCard({pricingItem}) {
    const { id:priceId, billing_scheme, currency, nickname, product:productId, unit_amount, recurring    } = pricingItem;
    const amount = unit_amount / 100;
    const amountFormatted = amount.toLocaleString("en-US",{style: 'currency',currency: currency.toUpperCase(),minimumFractionDigits: 0,maximumFractionDigits: 0,});
    const recurringInterval = recurring.interval;


  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nickname}</h5>
     
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {/* {currency} {unit_amount / 100} per month */}
            {amountFormatted} 
            {/* / {currency} / per {recurring} */}
        </p>
        <SubscribeButton priceId={priceId} />
    </div>
  )
}

export default PricingCard