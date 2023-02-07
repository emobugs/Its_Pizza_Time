export function formatCurrency(sum) {
  return sum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
}
