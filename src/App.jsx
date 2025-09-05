import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("IDR");
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    // Dummy rate: 1 USD = 15,000 IDR
    const dummyRates = { USD: 1, IDR: 15000, EUR: 0.9 };
    const converted = (amount / dummyRates[from]) * dummyRates[to];
    setResult(converted.toFixed(2));
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">💱 MONEX</h1>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg p-2 mb-3"
        />

        <div className="flex gap-2 mb-3">
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="flex-1 border rounded-lg p-2"
          >
            <option value="USD">USD</option>
            <option value="IDR">IDR</option>
            <option value="EUR">EUR</option>
          </select>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="flex-1 border rounded-lg p-2"
          >
            <option value="USD">USD</option>
            <option value="IDR">IDR</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        <button
          onClick={handleConvert}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Convert
        </button>

        {result && (
          <p className="mt-4 text-center text-lg font-semibold">
            Result: {result} {to}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
