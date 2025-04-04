import React from "react";
import StatsPage from "@/components/statsPage";
import getStats from "@/lib/fetch";

export interface CryptoData {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

const CryptoCard = async ({ params }: { params: { name: string } }) => {
  const getData = await getStats();

  const findData = getData.find((coin: CryptoData) => coin.id === params.name);

  const data: CryptoData = findData || null;

  return <StatsPage data={data} />;
};

export default CryptoCard;
