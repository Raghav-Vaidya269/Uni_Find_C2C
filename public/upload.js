const token = localStorage.getItem('token');
if (!token) location.href = 'index.html';

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch('/items', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        body: formData
    });

    if (res.ok) {
        alert('Item uploaded!');
        location.href = 'dashboard.html';
    } else {
        alert('Upload failed');
    }
});