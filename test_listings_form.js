const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

async function testListings(token) {
    try {
        console.log('--- Creating Item (Multipart) ---');
        const formData = new FormData();
        formData.append('title', 'Bot Test Item');
        formData.append('description', 'A test item from the bot');
        formData.append('price', '150');
        formData.append('category', 'Other');

        const dummyPath = path.join(__dirname, 'dummy_item.png');
        fs.writeFileSync(dummyPath, 'fake item image');
        formData.append('images', fs.createReadStream(dummyPath));

        const createRes = await axios.post('http://localhost:3000/api/items', formData, {
            headers: {
                ...formData.getHeaders(),
                'Authorization': `Bearer ${token}`
            }
        });
        console.log('Item Created:', createRes.data);
        fs.unlinkSync(dummyPath);

        console.log('\n--- Fetching My Items ---');
        const itemsRes = await axios.get('http://localhost:3000/api/my-items', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        console.log('My Items Count:', itemsRes.data.length);
        if (itemsRes.data.length > 0) {
            const lastItem = itemsRes.data[0];
            console.log('Item Title:', lastItem.title);
            console.log('Seller Info:', {
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
