export function formatAmount(amount) {
  amount = amount.toString();
  amount = amount.includes("£") ? amount.split("£")[1] : amount;

  return new Intl.NumberFormat("en-GB", {
    currency: "GBP",
    style: "currency",
  }).format(amount);
}

export function unFormatAmount(amount) {
  amount = amount.toString();
  amount = amount.includes("£") ? amount.split("£")[1] : amount;

  amount = new Intl.NumberFormat("en-GB", {
    currency: "GBP",
    style: "currency",
  }).format(amount);

  return amount.split("£")[1];
}