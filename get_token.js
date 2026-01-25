const axios = require('axios');

async function login() {
    try {
        const response = await axios.post('http://localhost:3000/api/auth/kumail', {
            email: 'testbot2@ku.edu.np',
            type: 'login',
            password: 'password123'
        });
        console.log(response.data.token);
    } catch (err) {
        console.error('Login Failed:', err.response ? err.response.data : err.message);
    }
}

login();
