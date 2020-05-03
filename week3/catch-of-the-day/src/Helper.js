export function formatCurrency(cent) {
    return (cent / 100).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}