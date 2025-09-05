    import { useEffect, useState } from "react";
    import ConverterForm from "../components/ConverterForm";
    import { getRates } from "../services/exchangeApi";

    function Home() {
    const [rates, setRates] = useState({});
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRates("USD")
        .then((data) => setRates(data.conversion_rates))
        .finally(() => setLoading(false));
    }, []);

    const handleConvert = (amount, from, to) => {
        if (!rates[from] || !rates[to]) return;
        const converted = (amount / rates[from]) * rates[to];
        setResult(converted.toFixed(2));
    };

    if (loading) return <p className="text-center">Loading...</p>;

    return (
        <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <h1 className="text-2xl font-bold mb-4 text-center">💱 MONEX</h1>
            <ConverterForm rates={rates} onConvert={handleConvert} />

            {result && (
            <p className="mt-4 text-center text-lg font-semibold">
                Result: {result}
            </p>
            )}
        </div>
        </div>
    );
    }

    export default Home;
