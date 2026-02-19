export default async function getPastOrders(page) {
  const response = await fetch(`/api/orders/past?page=${page}`);
  const data = await response.json();
  return data;
}
