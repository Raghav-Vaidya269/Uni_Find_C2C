const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

async function testUpdateImage(token, itemId) {
    try {
        console.log(`--- Updating Item ${itemId} with New Image ---`);
        const formData = new FormData();
        formData.append('title', 'Updated Title with Image');
        formData.append('description', 'Updated description');
        formData.append('price', '200');
        formData.append('category', 'Electronics');

        const dummyPath = path.join(__dirname, 'new_test_image.png');
        fs.writeFileSync(dummyPath, 'new dummy image data');
        formData.append('images', fs.createReadStream(dummyPath));

        const response = await axios.put(`http://localhost:3000/api/items/${itemId}`, formData, {
            headers: {
                ...formData.getHeaders(),
                'Authorization': `Bearer ${token}`
            }
        });

        console.log('Update Response:', JSON.stringify(response.data, null, 2));
        fs.unlinkSync(dummyPath);
    } catch (err) {
        console.error('Update Failed:', err.response ? err.response.data : err.message);
    }
}

const token = process.argv[2];
const itemId = process.argv[3];
if (token && itemId) {
    testUpdateImage(token, itemId);
} else {
    console.log('Usage: node test_update_image.js <token> <itemId>');
}
