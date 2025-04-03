// type MarketData = {
//   id: string;
//   symbol: string;
//   name: string;
//   image: string;
//   current_price: number;
//   market_cap: number;
//   market_cap_rank: number;
//   total_volume: number;
//   high_24h: number;
//   low_24h: number;
//   price_change_24h: number;
//   price_change_percentage_24h: number;
//   market_cap_change_24h: number;
//   market_cap_change_percentage_24h: number;
//   circulating_supply: number;
//   total_supply: number | null;
//   max_supply: number | null;
//   ath: number;
//   ath_change_percentage: number;
//   ath_date: string;
//   last_updated: string;
//   sparkline_in_7d?: {
//     price: number[];
//   };
// };

export default async function getStats() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1",
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
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
    return stats;
  } catch (error) {
    console.error("Failed to fetch market stats:", error);
    return []; // Return empty array if API fails
  }
}
