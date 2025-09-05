    import { useState } from "react";

    function ConverterForm({ rates, onConvert }) {
    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("IDR");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount) return;
        onConvert(Number(amount), from, to);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
            type="number"
            placeholder="Enter amount"
            className="border p-2 rounded-md"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />

        <div className="flex gap-2">
            <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="flex-1 border p-2 rounded-md"
            >
            {Object.keys(rates).map((code) => (
                <option key={code} value={code}>
                {code}
                </option>
            ))}
            </select>

            <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="flex-1 border p-2 rounded-md"
            >
            {Object.keys(rates).map((code) => (
                <option key={code} value={code}>
                {code}
                </option>
            ))}
            </select>
        </div>

        <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
            Convert
        </button>
        </form>
    );
    }

    export default ConverterForm;
