const token = localStorage.getItem('token');

if (!token) {
    window.location.href = 'index.html';
}

fetch('/dashboard', {
    headers: {
        'Authorization': 'Bearer ' + token
    }
})
    .then(res => {
        if (res.status === 401 || res.status === 403) {
            localStorage.removeItem('token');
            window.location.href = 'index.html';
        }
        return res.json();
    })
    .then(data => {
        document.body.innerHTML += `<h2>${data.message}</h2>`;
    });