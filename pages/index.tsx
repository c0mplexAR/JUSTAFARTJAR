
import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-50 text-gray-800 p-6">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">JUST A FART JAR 💨</h1>
        <p className="text-xl mb-6">The most explosive meme on Solana. Not financial advice, just gas.</p>
        <img
          src="/fartjar-mascot.png"
          alt="FartJar Mascot"
          className="mx-auto w-64 rounded-2xl shadow-lg"
        />
        <div className="mt-6 space-x-4">
          <Button className="bg-green-500 hover:bg-green-600">Buy Now</Button>
          <Button variant="outline">Pump.fun (Coming Soon)</Button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4">💡 About the Project</h2>
        <p>
          JUST A FART JAR is a community-created meme coin with a love for humor and meme culture.
          With a jar in one hand and a crypto wallet in the other, this token won't go unnoticed.
        </p>
      </section>

      <section className="bg-white bg-opacity-80 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">📊 Tokenomics</h2>
          <ul className="list-disc list-inside">
            <li>Total Supply: 1,000,000,000 JAFJ</li>
            <li>40% Liquidity</li>
            <li>20% Marketing</li>
            <li>30% Community and Airdrops</li>
            <li>10% Team</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4">🛣️ Roadmap</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>🚀 Launch on Pump.fun</li>
          <li>📣 Meme campaign across socials</li>
          <li>🧪 NFT collection: "Fart Jar"</li>
          <li>🌍 Global domination</li>
        </ol>
      </section>

      <section className="bg-gray-200 py-8 text-center">
        <p>Connect with us: <br />
          <a href="https://t.me/JUSTAFARTJAR" className="text-blue-600 underline">Telegram Group</a> | Twitter | Discord<br />
          Contract: Coming when launched on Pump.fun
        </p>
      </section>
    </main>
  );
}
