console.log("LOGIN SCRIPT LOADED");
document.getElementById('loginForm').addEventListener('submit', async (e) => { //addEventListener 
    e.preventDefault(); //preventDefault() does not reload the page on form submission, I'll do it myself, browser

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }) //shorthand for { email: email, password: password }
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = 'dashboard.html';
    } else {
        alert('Login failed');
    }
});