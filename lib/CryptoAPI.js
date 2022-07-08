const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOption, curOption) {
        try {
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);

            
        } catch (err) {
            console.error(err);
        }
    }
}