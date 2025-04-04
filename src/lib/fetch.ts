
export default async function getStats() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if response is OK
    if (!response.ok) {
      throw new Error(
        `Error fetching data: ${response.status} ${response.statusText}`
      );
    }

    const stats = await response.json();
    console.log(stats)
    return stats;
  } catch (error) {
    console.error("Failed to fetch market stats:", error);
    return []; // Return empty array if API fails
  }
}
