export function formatCurrency(cent) {
    return (cents / 100).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}