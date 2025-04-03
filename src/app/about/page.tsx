export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 text-white bg-gray-900 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-center text-blue-400">
        About CryptoStats
      </h1>
      <p className="text-center text-gray-400 mt-2">
        Tracking the pulse of the crypto market, in real-time.
      </p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-blue-300">
            🚀 The Vision
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Crypto moves fast. Prices swing, trends shift, and staying informed
            is the difference between profit and loss. I built{" "}
            <span className="font-bold text-white">CryptoStats</span> to make
            tracking the market simple, clean, and real-time—so you can make
            smarter decisions, faster.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300">
            💡 Why This Matters
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Most crypto platforms are cluttered, overwhelming, or slow. My goal?
            A **beautiful, minimalist dashboard** that gives you only what you
            need—**no noise, no fluff**—just accurate data, stunning visuals,
            and a seamless experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300">
            🔍 Transparency & Accuracy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Data comes directly from **CoinGecko**, a trusted source in the
            industry. **No hidden fees, no ads, no distractions**—just clean,
            reliable stats that help you stay ahead.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300">
            📈 Built for Traders & Enthusiasts
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Whether you're a **seasoned investor** or just getting started,
            CryptoStats gives you the tools to track prices, analyze trends, and
            follow your favorite coins—all in one place.
          </p>
        </section>

        <section className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-300">
            🌎 Join the Movement
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Crypto is changing the world. **Knowledge is power.** Stay informed,
            stay ahead. **Welcome to CryptoStats.**
          </p>
        </section>
      </div>
    </div>
  );
}
