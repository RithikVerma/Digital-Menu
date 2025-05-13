export const formatCurrency = (amount: number, currency: 'USD' | 'INR' = 'INR') => {
  if (currency === 'INR') {
    return `₹${amount.toFixed(2)}`;
  }
  return `$${amount.toFixed(2)}`;
}; 