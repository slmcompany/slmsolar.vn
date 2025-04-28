export const formatPrice = (price: number | undefined): string => {
  if (!price) return '0';
  const roundedPrice = Math.round(price / 10000) * 10000;
  return roundedPrice.toLocaleString('vi-VN');
}; 