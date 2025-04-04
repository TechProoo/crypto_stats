import getStats from "@/lib/fetch";
import Link from "next/link";

export default async function TableData() {
  const data = await getStats(); // Fetch crypto market data

  return (
    <div className="max-w-5xl mx-auto mt-10 p-5 bg-gray-900 text-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-5">🔥 Top 10 Cryptos</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-gray-800 text-gray-300 uppercase text-sm">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Coin</th>
              <th className="p-3 text-right">Price</th>
              <th className="p-3 text-right">24H Change</th>
              <th className="p-3 text-right">Market Cap</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((coin: any, index: number) => (
              <tr
                key={coin.id}
                className="border-b border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="p-3 text-gray-400">{index + 1}</td>
                <td className="p-3 flex items-center space-x-3">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-7 h-7 rounded-full"
                  />
                  <Link
                    href={`/${coin.id}`}
                    className="font-medium hover:underline"
                  >
                    {coin.name}
                  </Link>
                  <span className="text-gray-400 text-sm">
                    ({coin.symbol.toUpperCase()})
                  </span>
                </td>
                <td className="p-3 text-right font-semibold">
                  ${coin.current_price.toLocaleString()}
                </td>
                <td
                  className={`p-3 text-right font-semibold ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="p-3 text-right">
                  ${coin.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
