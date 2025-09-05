    const API_KEY = "YOUR_API_KEY"; // ganti dengan key asli kamu dari exchangerate-api.com

    export async function getRates(base = "USD") {
    const res = await fetch(
        `https://v6.exchangerate-api.com/v6/404ed932b2e6b5651d31817b/latest/USD`
    );
    if (!res.ok) throw new Error("Failed to fetch exchange rates");
    return res.json();
    }
