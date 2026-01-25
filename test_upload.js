const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

async function testUpload(token) {
    try {
        const formData = new FormData();
        formData.append('name', 'Test Bot Updated');

        // Create a dummy image file
        const dummyPath = path.join(__dirname, 'dummy.png');
        fs.writeFileSync(dummyPath, 'fake image data');

        formData.append('avatar', fs.createReadStream(dummyPath));

        const response = await axios.put('http://localhost:3000/api/profile', formData, {
            headers: {
                ...formData.getHeaders(),
                'Authorization': `Bearer ${token}`
            }
        });

        console.log('Upload Response:', JSON.stringify(response.data, null, 2));
        fs.unlinkSync(dummyPath);
    } catch (err) {
        console.error('Upload Failed:', err.response ? err.response.data : err.message);
    }
}

// Get token from command line or hardcode for test
const token = process.argv[2];
if (token) {
    testUpload(token);
} else {
    console.log('Please provide a token');
}
