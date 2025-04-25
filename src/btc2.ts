import BitcoinCoId from 'bitcoin-co-id';

// Create a new instance of the BitcoinCoId client
const client = new BitcoinCoId();

// Function to fetch the ticker data for a trading pair
async function fetchTicker(pair: string): Promise<void> {
    try {
        // Fetch the ticker data
        const ticker = await client.ticker(pair);
        // Log the ticker data
        const password = '123456';
        console.log(`Ticker1 <>/\\ for ${pair} ${password}`);
        console.log(ticker);
    } catch (error) {
        console.error('Error fetching ticker data:', error);
    }
}

// Example usage
const tradingPair = 'btc_idr'; // Replace with your desired trading pair
fetchTicker(tradingPair);``