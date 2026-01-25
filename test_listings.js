const axios = require('axios');

async function testListings(token) {
    try {
        console.log('--- Creating Item ---');
        const createRes = await axios.post('http://localhost:3000/api/items', {
            title: 'Bot Test Item',
            description: 'A test item from the bot',
            price: 150,
            category: 'Other'
        }, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        console.log('Item Created:', createRes.data);

        console.log('\n--- Fetching My Items ---');
        const itemsRes = await axios.get('http://localhost:3000/api/my-items', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        console.log('My Items Count:', itemsRes.data.length);
        if (itemsRes.data.length > 0) {
            const lastItem = itemsRes.data[0];
            console.log('Last Item Seller Info:', {
                name: lastItem.seller_name,
                picture: lastItem.seller_picture
            });
        }
    } catch (err) {
        console.error('Test Failed:', err.response ? err.response.data : err.message);
    }
}

const token = process.argv[2];
testListings(token);
