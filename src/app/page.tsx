import TableData from "@/components/ui/tableData";

export default function Home() {
  return (
    <div className=" mt-10">
      <div className="text-center text-white">
        <h1 className="md:text-7xl text-3xl text-center leading-20 text-white">
          Largest
          <p className=" font-black">Crypto</p>
          Marketplace
        </h1>
        <p className="mt-5 design_text w-2/3 m-auto text-md">
          Welcome to the world's largest and most comprehensive Cryptocurrency
          market analysis platform, where we provide in-depth insights,
          real-time data
        </p>
        <h1>🚀</h1>

        <TableData />
      </div>
    </div>
  );
}
